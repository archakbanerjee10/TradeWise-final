import streamlit as st
import torch
import pandas as pd
import gc
from newsapi import NewsApiClient
from transformers import AutoTokenizer, AutoModelForSequenceClassification