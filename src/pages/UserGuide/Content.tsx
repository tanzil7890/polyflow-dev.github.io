import { CodeBlock } from './CodeBlock';

export function Content() {
  return (
    <div className="flex-1 min-w-0">
      <div className="prose prose-blue max-w-none">
        <h1 className="text-4xl font-bold mb-8">
          User Guide 
          <span className="ml-2 inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
            In Development
          </span>
        </h1>

        <section id="dataframes-semantic" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-bold mb-4">DataFrames with Semantic Operations</h2>
          <p className="text-gray-600 mb-6">
            DataFrames in PolyFlow extend Pandas with semantic operations powered by LLMs.
          </p>
          <CodeBlock language="python">{`
# Create a DataFrame
df = pd.DataFrame({
    "Course Name": [
        "Machine Learning",
        "Data Structures",
        "Quantum Computing",
        "Neural Networks"
    ]
})

# Configure PolyFlow
import polyflow
from polyflow.models import Model_Selector
lm = Model_Selector(model="gpt-4o-mini")
polyflow.settings.configure(lm=lm)
          `}</CodeBlock>
        </section>

        <section id="core-operators" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-bold mb-4">Core Semantic Operators</h2>
          
          <h3 className="text-xl font-bold mb-4 mt-8">1. Vector Search</h3>
          <CodeBlock language="python">{`
# Search for AI-related courses
results = df.vector_search(
    "Course Name",
    "Find courses related to artificial intelligence",
    K=2
)
          `}</CodeBlock>

          <h3 className="text-xl font-bold mb-4 mt-8">2. Semantic Aggregation</h3>
          <CodeBlock language="python">{`
# Summarize courses by category
results = df.sem_agg(
    "Summarize the {Course Name} by their field",
    group_by=["Category"]
)
          `}</CodeBlock>

          <h3 className="text-xl font-bold mb-4 mt-8">3. Vector Join</h3>
          <CodeBlock language="python">{`
# Join courses with skills
skills_df = pd.DataFrame({"Skill": ["Math", "Programming"]})
matches = df.vector_join(
    skills_df,
    "Taking {Course Name} will help learn {Skill}"
)
          `}</CodeBlock>
        </section>

        <section id="advanced-features" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-bold mb-4">Advanced Features</h2>

          <h3 className="text-xl font-bold mb-4 mt-8">1. Time Series Analysis</h3>
          <CodeBlock language="python">{`
# Detect anomalies in time series data
anomalies = df.vecsem_time_series.detect_anomalies(
    time_col="timestamp",
    value_col="value",
    description="Find significant deviations"
)
          `}</CodeBlock>

          <h3 className="text-xl font-bold mb-4 mt-8">2. Caching System</h3>
          <CodeBlock language="python">{`
from polyflow.cache import CacheConfig, CacheFactory, CacheType

cache_config = CacheConfig(
    cache_type=CacheType.SQLITE,
    max_size=1000,
    cache_dir="~/.polyflow/cache"
)
lm = Model_Selector(model="gpt-4o-mini", cache=cache)
          `}</CodeBlock>

          <h3 className="text-xl font-bold mb-4 mt-8">3. Top-K Operations</h3>
          <CodeBlock language="python">{`
# Find most challenging courses by department
results = df.sem_topk(
    "Which {Course Name} is most challenging?",
    K=2,
    group_by=["Department"]
)
          `}</CodeBlock>
        </section>

        <section id="model-integration" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-bold mb-4">Model Integration</h2>

          <h3 className="text-xl font-bold mb-4 mt-8">1. Language Models</h3>
          <CodeBlock language="python">{`
# Configure different LLMs
from polyflow.models import Model_Selector
lm = Model_Selector(model="gpt-4")  # OpenAI
lm = Model_Selector(model="claude-2")  # Anthropic
lm = Model_Selector(model="local-llm")  # Local deployment
          `}</CodeBlock>

          <h3 className="text-xl font-bold mb-4 mt-8">2. Embedding Models</h3>
          <CodeBlock language="python">{`
# Configure embedding models
from polyflow.models import SentenceTransformersRM
rm = SentenceTransformersRM(model="intfloat/e5-base-v2")
polyflow.settings.configure(rm=rm)
          `}</CodeBlock>
        </section>

        <section id="setting-configuration" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-bold mb-4">Settings Configuration</h2>

          <CodeBlock language="python">{`
# Configure different LLMs

polyflow.settings.configure(
    lm=language_model,
    rm=retrieval_model,
    reranker=reranker_model,
    enable_cache=True
)
          `}</CodeBlock>

        </section>


      </div>
    </div>
  );
}