
import { CodeBlock } from '../CodeExample/CodeBlock';

const examples = [
  {
    title: "Product Performance Analysis",
    description: "Analyze product performance using sales data, pricing, and customer reviews",
    code: `import polyflow as pf
from polyflow.models import Model_Selector

# Configure LLM
lm = Model_Selector(model="gpt-4-mini")
pf.settings.configure(lm=lm)

df = pf.DataFrame({
    "product": ["Premium Wireless Headphones", "Smart Fitness Tracker"],
    "price": [199.99, 149.99],
    "monthly_sales": [1200, 800],
    "customer_reviews": [
        "Great sound quality but expensive",
        "Battery life could be better, good fitness features"
    ]
})

results = df.llm_transform(
    columns=["product", "price", "monthly_sales", "customer_reviews"],
    prompt="Based on price, sales, and reviews, is this a high-performing product?",
    threshold=0.75,
    return_scores=True,
    return_reasoning=True,
    suffix="_performance"
)`,
    output: `Product Performance Analysis:
                    product  price  monthly_sales  performance  score  reasoning
0  Premium Wireless Headphones  199.99         1200        True   0.85  "High sales despite premium price..."
1      Smart Fitness Tracker   149.99          800       False   0.65  "Moderate sales with mixed reviews..."`,
  },
  {
    title: "Profit Margin Analysis",
    description: "Evaluate financial success based on revenue and profit margins",
    code: `df['revenue'] = df['price'] * df['monthly_sales']
df['profit_margin'] = 0.4  # Assuming 40% margin

results = df.llm_transform(
    columns=["product", "revenue", "profit_margin", "monthly_sales"],
    prompt="Is this product financially successful with revenue over $100,000?",
    suffix="_financial_success"
)`,
    output: `Financial Analysis:
                    product    revenue  profit_margin  success  reasoning
0  Premium Wireless Headphones  239,988         0.4     True   "Revenue exceeds threshold..."
1      Smart Fitness Tracker    119,992         0.4     True   "Meets revenue target..."`,
  },
  {
    title: "Price-Performance Ratio",
    description: "Assess value for money based on price and customer feedback",
    code: `results = df.llm_transform(
    columns=["product", "price", "customer_reviews"],
    prompt="Does this product provide good value for money?",
    suffix="_value"
)`,
    output: `Value Analysis:
                    product    price  value_score  value_assessment
0  Premium Wireless Headphones  199.99         0.75  "Good value despite high price..."
1      Smart Fitness Tracker    149.99         0.70  "Moderate value, improvements needed..."`,
  }
];

export function AdvancedExamples() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Advanced Usage Examples
          </h2>
          <p className="text-xl text-gray-600">
            Explore different ways to analyze your data with PolyFlow
          </p>
        </div>
        
        <div className="space-y-16">
          {examples.map((example, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {example.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {example.description}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-900 rounded-xl overflow-hidden">
                  <div className="px-4 py-2 bg-gray-800/50 border-b border-gray-700">
                    <p className="text-sm text-gray-400">Code</p>
                  </div>
                  <CodeBlock code={example.code} />
                </div>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                    <p className="text-sm text-gray-600">Output</p>
                  </div>
                  <div className="p-4">
                    <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                      {example.output}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 