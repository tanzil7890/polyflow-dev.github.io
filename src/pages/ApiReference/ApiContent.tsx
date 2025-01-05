import { CodeBlock } from '../UserGuide/CodeBlock';

export function ApiContent() {
  return (
    <div className="flex-1 min-w-0">
      <div className="prose prose-blue max-w-none">
        <h1 className="text-4xl font-bold mb-8">API Reference</h1>
        
        <section id="installation" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-bold mb-4">Installation</h2>
          <p className="text-gray-600 mb-6">
            Install PolyFlow using your preferred package manager.
          </p>
          <CodeBlock language="python">
          pip install polyflow-dev-ai    # Python
          </CodeBlock>
        </section>

        <section id="configuration" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-bold mb-4">Configuration</h2>
          <p className="text-gray-600 mb-6">
            Configure PolyFlow by initializing the Language Model (LM) and setting up the global configuration. 
            This enables semantic operations across your DataFrame operations.
          </p>
          <CodeBlock language="python">
            {`# Configure PolyFlow
import polyflow
from polyflow.models import LM
lm = LM(model="gpt-4o-mini")
polyflow.settings.configure(lm=lm)`}
          </CodeBlock>
        </section>

        <section id="core-models" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-bold mb-4">Core Models</h2>
          
          <h3 className="text-xl font-bold mb-4 mt-8">LM (Language Model)</h3>
          <p className="text-gray-600 mb-6">
            Base class for language model operations.
          </p>
          <CodeBlock language="python">
            {`from polyflow.models import LM

lm = LM(
    model="gpt-4o-mini",  # Model name
    api_key=None,         # Optional API key
    temperature=0.1,      # Model temperature
    max_tokens=2048,      # Max output tokens
    cache=cache_config    # Optional caching
)`}
          </CodeBlock>

          <h3 className="text-xl font-bold mb-4 mt-8">RM (Retrieval Model)</h3>
          <p className="text-gray-600 mb-6">
            Base class for vector embeddings and similarity search.
          </p>
          <CodeBlock language="python">
            {`from polyflow.models import SentenceTransformersRM

rm = SentenceTransformersRM(
    model="intfloat/e5-base-v2"  # Embedding model name
)`}
          </CodeBlock>

          <h3 className="text-xl font-bold mb-4 mt-8">SemanticReranker</h3>
          <p className="text-gray-600 mb-6">
            Base class for reranking search results.
          </p>
          <CodeBlock language="python">
            {`from polyflow.models import CrossEncoderReranker

reranker = CrossEncoderReranker(
    model="mixedbread-ai/mxbai-rerank-large-v1"
)`}
          </CodeBlock>
        </section>

        <section id="semantic-operators" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-bold mb-4">Semantic Operators</h2>

          <h3 className="text-xl font-bold mb-4 mt-8">vector_search</h3>
          <p className="text-gray-600 mb-6">
            Performs similarity-based search over indexed columns.
          </p>
          <CodeBlock language="python">
            {`results = df.vector_search(
    column="content",           # Column to search
    query="search query",       # Natural language query
    K=2,                       # Number of results
    n_rerank=None             # Optional reranking
)`}
          </CodeBlock>

          <h3 className="text-xl font-bold mb-4 mt-8">vector_join</h3>
          <p className="text-gray-600 mb-6">
            Joins dataframes based on semantic similarity.
          </p>
          <CodeBlock language="python">
            {`results = df1.vector_join(
    df2,                       # DataFrame to join with
    "Taking {col1} will help learn {col2}"  # Join predicate
)`}
          </CodeBlock>

          <h3 className="text-xl font-bold mb-4 mt-8">vector_filter</h3>
          <p className="text-gray-600 mb-6">
            Filters data based on semantic conditions.
          </p>
          <CodeBlock language="python">
            {`filtered = df.vector_filter(
    "{column_name} requires advanced mathematics"
)`}
          </CodeBlock>

          <h3 className="text-xl font-bold mb-4 mt-8">sem_agg</h3>
          <p className="text-gray-600 mb-6">
            Performs semantic aggregation operations.
          </p>
          <CodeBlock language="python">
            {`aggregated = df.sem_agg(
    "Summarize the {content} by category",
    group_by=["category"]
)`}
          </CodeBlock>

          <h3 className="text-xl font-bold mb-4 mt-8">vector_index</h3>
          <p className="text-gray-600 mb-6">
            Creates semantic indices for efficient retrieval.
          </p>
          <CodeBlock language="python">
            {`df = df.vector_index(
    column="content",          # Column to index
    index_dir="index_path"     # Index storage location
)`}
          </CodeBlock>
        </section>

        <section id="utility-features" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-bold mb-4">Utility Features</h2>

          <h3 className="text-xl font-bold mb-4 mt-8">Cache Configuration</h3>
          <CodeBlock language="python">
            {`from polyflow.cache import CacheConfig, CacheType

cache_config = CacheConfig(
    cache_type=CacheType.SQLITE,
    max_size=1000,
    cache_dir="~/.polyflow/cache"
)`}
          </CodeBlock>

          <h3 className="text-xl font-bold mb-4 mt-8">Settings Configuration</h3>
          <CodeBlock language="python">
            {`import polyflow

polyflow.settings.configure(
    lm=language_model,
    rm=retrieval_model,
    reranker=reranker_model,
    enable_cache=True
)`}
          </CodeBlock>
        </section>
      </div>
    </div>
  );
}
