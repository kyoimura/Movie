# Movie Financial Performance

## Intro

This project analyzes the financial performance of movies, aiming to uncover why some films succeed at the box office while others flop. Using machine learning models—including neural networks, random forest, and XGBoost—the project predicts a film's lifetime gross based on features such as budget, runtime, ratings, and user scores. The workflow includes data scraping, preprocessing, exploratory data analysis (EDA), feature engineering, and model evaluation.

**Example Output:**  
- Predictive models with R² scores up to 0.95 on test data  
- Animated visualizations of gross by season, rating, and genre  
- Insights into feature importance and correlations

## Usage

1. Clone the repository.
2. Install required dependencies (see Requirements below).
3. Run the Jupyter notebook [Movie Financial Performance.ipynb](Movie%20Financial%20Performance.ipynb) to:
   - Scrape and preprocess data
   - Perform EDA
   - Train and evaluate models
   - Visualize results

## Requirements

- Python 3.7+
- Jupyter Notebook
- pandas, numpy, matplotlib, seaborn, plotly, scikit-learn, xgboost, tensorflow, keras, keras-tuner, opendatasets, beautifulsoup4, requests

Install dependencies with:
```sh
pip install -r requirements.txt
```

## Documentation

Full documentation is available in [Movie Financial Performance.ipynb](Movie%20Financial%20Performance.ipynb), which contains step-by-step explanations, code, and visualizations.

## Contributing Guidelines

Contributions are welcome!  
- Fork the repository and create a pull request with your changes.
- Please follow PEP8 style guidelines and include clear documentation/comments.
- For major changes, open an issue first to discuss your proposal.

## Changelog

- **v1.0**: Initial release with data scraping, preprocessing, EDA, baseline and advanced models (Neural Network, Random Forest, XGBoost), and visualizations.

## Future Plans

- Expand dataset with more features (e.g., marketing spend, competition).
- Add model interpretability tools.
- Deploy as a web app for interactive predictions.

