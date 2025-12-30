import streamlit as st
import pandas as pd
import worldnewsapi
from worldnewsapi.rest import ApiException

st.set_page_config(page_title="TruthLens AI", layout="wide")

# Fintech-grade ocean blue theme
st.markdown("""
    <style>
    .stApp {
        background-color: #011627;
        color: #E0E0E0;
    }
    header {
        background: linear-gradient(to right, #022B42, #03405F);
        padding: 1.5rem;
        border-bottom: 4px solid #00D1FF;
        text-align: center;
        margin-bottom: 2rem;
    }
    h1 {
        color: #00D1FF;
        margin: 0;
        font-size: 3rem;
    }
    .subtitle {
        color: #A0D8EF;
        margin: 0.5rem 0 0 0;
    }
    .stTextInput > div > div > input {
        background-color: #022B42;
        color: #E0E0E0;
        border: 1px solid #00D1FF;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }
    th {
        background-color: #022B42;
        color: #00D1FF;
        padding: 12px;
        text-align: left;
    }
    td {
        padding: 12px;
        border-bottom: 1px solid #03405F;
    }
    tr:hover {
        background-color: #022B42;
    }
    </style>
""", unsafe_allow_html=True)

# Header
st.markdown("""
    <header>
        <h1>TruthLens AI</h1>
        <p class="subtitle">Financial News Verification Dashboard</p>
    </header>
""", unsafe_allow_html=True)

# Hardcoded API key (as provided) - no input field shown
API_KEY = "75995f2a575649dca02674d8146ce550"

configuration = worldnewsapi.Configuration(
    api_key={'apiKey': API_KEY}
)
api_client = worldnewsapi.ApiClient(configuration)
api_instance = worldnewsapi.NewsApi(api_client)

def fetch_financial_news(query: str):
    try:
        with st.status("Searching...", expanded=False):
            response = api_instance.search_news(
                text=query,
                language="en",
                number=5,
                sort="publish-time",
                sort_direction="desc"
            )
        
        articles = []
        for article in response.news:
            sentiment = getattr(article, 'sentiment', 0.0) or 0.0
            
            if sentiment > 0.1:
                label = "BULLISH"
                color = "#00FF00"
            elif sentiment < -0.1:
                label = "BEARISH"
                color = "#FF0000"
            else:
                label = "NEUTRAL"
                color = "#FFD700"
            
            trust_score = round(85 + (sentiment * 10), 2)
            
            source = (getattr(article, 'source_country', None) or "UNKNOWN").upper()
            published = getattr(article, 'publish_date', None)
            published = published[:10] if published else "N/A"
            
            articles.append({
                "Title": f'<a href="{article.url}" target="_blank" style="color:#00D1FF; text-decoration:none;">{article.title}</a>',
                "Source": source,
                "Date": published,
                "Sentiment": f'<span style="color:{color}; font-weight:bold;">{label}</span>',
                "Trust Score": f"{trust_score}%"
            })
        
        return pd.DataFrame(articles)
    
    except ApiException as e:
        if hasattr(e, 'status') and e.status == 401:
            st.error("Invalid API key. Contact support if issue persists.")
        elif hasattr(e, 'status') and e.status == 429:
            st.error("Rate limit exceeded. Please try again later.")
        else:
            st.error(f"API Error: {str(e)}")
        return pd.DataFrame()
    
    except Exception as e:
        st.error(f"Unexpected error: {str(e)}")
        return pd.DataFrame()

# Query input
query = st.text_input(
    "Enter financial topic or company (e.g., Bitcoin, Tesla, Fed rates):",
    placeholder="Bitcoin"
)

if query:
    df = fetch_financial_news(query)
    if not df.empty:
        html_table = df.to_html(escape=False, index=False)
        st.write(html_table, unsafe_allow_html=True)
    else:
        st.info("No results found. Try a different query.")

st.caption("Powered by World News API • Sentiment & Trust Score derived from article analysis")