// ============================================
// PORTFOLIO DATA - Edit your info here!
// ============================================

export const personalInfo = {
  name: "Ezz Khalil",
  title: "Data Engineer | Data Integration Engineer",
  brief: "I'm a data-engineering enthusiast with experience in Informatica PowerCenter, Spark, DBT, Databricks, Python, and advanced SQL, building reliable ETL pipelines and dimensional models. Coming from a Scientific Computing background, I focus on scalable data integration and performance-driven design. My goal is to become a strong data engineer contributing to modern data and AI platforms.",
  photo: "src/assets/IMG-20251224-WA0026.jpg", // Replace with your photo path
  contacts: {
    email: "ezzkhalil74@gmail.com",
    phone: "+201558877702",
    linkedin: "https://www.linkedin.com/in/ezz-khalil-b18668217/",
    github: "https://github.com/ezz-khalil",
  },
};

export interface Skill {
  name: string;
  icon: string; // emoji or image URL
  iconType?: "emoji" | "img"; // defaults to emoji
  invertIcon?: boolean; // true for black SVGs (Simple Icons) on dark bg
}

export const skills: Skill[] = [
  { name: "Python", icon: "🐍" },
  { name: "SQL", icon: "🗄️" },
  { name: "Apache Spark", icon: "⚡" },
  { name: "Docker", icon: "🐳" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "ETL Pipelines", icon: "🔄" },
  { name: "Data Modeling", icon: "📐" },
  { name: "Git", icon: "📦" },
  // Simple Icons (monochrome black SVGs — need invert for dark bg)
  {
    name: "Informatica PowerCenter",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/informatica.svg",
    iconType: "img",
    invertIcon: true,
  },
  {
    name: "Databricks",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/databricks.svg",
    iconType: "img",
    invertIcon: true,
  },
  // Devicon (colored SVGs — no invert needed)
  {
    name: "Oracle",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
    iconType: "img",
    invertIcon: false,
  },
  {
    name: "SQL Server",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    iconType: "img",
    invertIcon: false,
  },
  {
    name: "dbt",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/dbt.svg",
    iconType: "img",
    invertIcon: true,
  },
];

export interface Experience {
  company: string;
  role: string;
  from: string;
  to: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    company: "Innotech Diamond",
    role: "Data Management Trainee",
    from: "Jan 2026",
    to: "Mar 2026",
    description:
      "Completed hands-on training in enterprise data management, practicing advanced SQL and implementing ETL workflows using Informatica PowerCenter across real-world tasks and projects",
  },
  {
    company: "Ischool",
    role: "Coding Instructor",
    from: "Jan 2025",
    to: "Nov 2025",
    description:
      "Instructed students in programming fundamentals, data structures, and software development best practices. Developed hands-on projects and mentored learners through technical challenges In Python, Game Development, Web Development, Data Science,Machine Learning and AI.",
  },
  {
    company: "CORELIA",
    role: "Data Science Intern",
    from: "Nov 2023",
    to: "Mar 2024",
    description:
      "Completed applied ML/DL training through hands-on implementation — building algorithms from scratch and developing end-to-end projects covering core machine learning and deep learning techniques.",
  },
];

export interface OverviewStat {
  value: string;
  label: string;
}

export interface OverviewCard {
  heading: string;
  body: string;
}

export interface DiagramSection {
  title: string;
  subtitle?: string;
  imagePath: string;
  sectionPretitle?: string;
  sectionTitle?: string;
}

export interface Challenge {
  num: string;
  title: string;
  tag: string;
  color: "teal" | "purple" | "blue" | "coral" | "amber";
  problem: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  brief: string;
  techStack: string[];
  coverImage: string;
  /** Optional rich-detail sections (used on the detail page) */
  details: {
    idea: string;
    whatWeDid: string;
    steps: string[];
    /** High-level KPI stats shown at the top of the detail page */
    stats?: OverviewStat[];
    /** Overview cards (Goal / Approach / …) */
    overviewCards?: OverviewCard[];
    /** Named diagram sections with image paths */
    diagramSections?: DiagramSection[];
    /** Legacy flat arrays — still supported */
    diagrams?: string[];
    screenshots?: string[];
    /** Challenges / solutions accordion */
    challenges?: Challenge[];
  };
}

export const projects: Project[] = [
  {
    id: "data-pipeline-project",
    title: "Retail Data Warehouse",
    brief:
      "An end-to-end dimensional data warehouse built from scratch using Kimball methodology — covering design, ETL implementation, auditing, and production-grade failure recovery.",
    techStack: ["Oracle", "SQL Server", "Informatica PowerCenter", "Kimball Methodology", "SCD Type 1 & 2", "Star Schema", "ETL Auditing"],
    coverImage: "",
    details: {
      idea: "Build a production-grade retail data warehouse from scratch using the Kimball dimensional modeling approach on the Northwind dataset — implementing every layer from staging through fact table, plus auditing and rollback recovery.",
      whatWeDid:
        "Followed Kimball Chapter 3 methodology: grain definition at order-line level, role-playing date dimensions via Oracle views, SCD Type 1 and Type 2 for all dimension tables, and a bridge table for employee–territory many-to-many relationships.",
      steps: [
        "Analyzed 11 source tables in the Northwind SQL Server OLTP schema",
        "Defined grain at order-line level following Kimball Ch. 3",
        "Designed 7 dimension tables and 3 derived fact tables as a star schema in Oracle",
        "Implemented SCD Type 1 for shipper, shipping address, and bridge dimensions",
        "Implemented SCD Type 2 for customer, employee, product, and supplier dimensions",
        "Built role-playing date dimensions (order date, required date, shipped date) via Oracle views",
        "Used MD5 hash of address fields as a natural key for the shipping address dimension",
        "Built a bridge table for employee–territory many-to-many with weighting factor via SQL subquery",
        "Implemented a full ETL audit table tracking start/end time, row counts, and last_success_run per mapping",
        "Implemented a $$AsOfDate parameter-file-driven rollback system for production-grade failure recovery",
        "Configured Informatica PowerCenter workflows with pre/post session command tasks for audit and recovery",
        "Used a 6-layer pipeline architecture: Source → Staging → SCD → Fact → Audit → Recovery",
      ],
      stats: [
        { value: "11", label: "Source tables" },
        { value: "7", label: "Dimensions" },
        { value: "3", label: "Derived facts" },
        { value: "6", label: "Pipeline layers" },
      ],
      overviewCards: [
        {
          heading: "Goal",
          body: "Build a production-grade retail data warehouse from scratch using the Kimball dimensional modeling approach on the Northwind dataset — implementing every layer from staging through fact table, plus auditing and rollback recovery.",
        },
        {
          heading: "Approach",
          body: "Followed Kimball Chapter 3 methodology: grain definition at order-line level, role-playing date dimensions via Oracle views, SCD Type 1 and Type 2 for all dimension tables, and a bridge table for employee–territory many-to-many relationships.",
        },
        {
          heading: "What makes it production-grade",
          body: "Beyond loading data — the project includes a full ETL audit table tracking start time, end time, row counts, and last successful run per mapping; plus a parameter-file-driven rollback system that restores any dimension to its pre-load state after a failed run.",
        },
        {
          heading: "Key design decisions",
          body: "Hash-based surrogate key for shipping address (no natural key). Weighting factor for territory allocation computed via SQL subquery to avoid PowerCenter's active/passive transformation constraint. Incremental load driven by last_success_run watermark.",
        },
      ],
      diagramSections: [
        {
          sectionPretitle: "02 — Source Data",
          sectionTitle: "Operational source schema",
          title: "Northwind — SQL Server",
          subtitle: "11 tables · operational OLTP schema",
          imagePath: "/src/assets/drawSQL-image-export-2026-03-05.jpg.jpeg",
        },
        {
          sectionPretitle: "03 — Dimensional Schema",
          sectionTitle: "Target dim model",
          title: "Target Dimensional Model — Oracle DWH",
          subtitle: "Star schema · 7 dimensions · 3 fact tables",
          imagePath: "/src/assets/drawSQLDWH-image-export-2026-03-26.jpg.jpeg",
        },
        {
          sectionPretitle: "04 — ETL Pipeline",
          sectionTitle: "Pipeline architecture",
          title: "Full ETL Architecture",
          subtitle: "6-layer pipeline · staging → SCD → fact → audit → recovery",
          imagePath: "/src/assets/retail_dwh_etl_architecture.svg",
        },
      ],
      challenges: [
        {
          num: "01",
          title: "Surrogate key caching in PowerCenter's Sequence Generator",
          tag: "ETL · PowerCenter",
          color: "teal",
          problem:
            "PowerCenter's Sequence Generator caches its next value at workflow initialization — before any task runs. Updating the sequence via pmrep updateseqgenvals before the session had zero effect because the Integration Service had already loaded the old cached value.",
          solution:
            "Import the target dimension table as a second source in the mapping. Add a SQL override with CROSS JOIN (SELECT MAX(surrogate_key) FROM dim_table). The Expression transformation adds a row counter on top of the max — self-healing, zero external dependencies, works on every rerun without IS restart.",
        },
        {
          num: "02",
          title: "Shipping address dimension with no natural key",
          tag: "Dimensional Modeling",
          color: "purple",
          problem:
            "Shipping address in Northwind is free-text fields on the order — no ID, no reference table. A customer can ship to multiple addresses. Building a stable, deduplicating dimension with no natural key is a genuine design problem.",
          solution:
            "MD5 hash of normalized (trimmed, uppercased, concatenated) address fields becomes the natural key. The dimension is insert-only — if the hash already exists, reuse the existing surrogate key. If not, insert a new row. No updates ever. No duplicates. Clean deduplication without any source ID.",
        },
        {
          num: "03",
          title: "Active vs passive transformation constraint in bridge table",
          tag: "PowerCenter · Architecture",
          color: "blue",
          problem:
            "The bridge table needed a weighting factor — 1 divided by the number of territories per employee. The instinct is Aggregator → Expression. But Aggregator is active (changes row count) and Expression is passive — PowerCenter cannot merge these pipelines back together after they diverge.",
          solution:
            "Push the aggregation into the source SQL override. A subquery computes COUNT(*) per employee_id and joins back to the detail rows inside the Source Qualifier — so every row arrives with territory_count already attached. No Aggregator in the mapping at all. All transformations remain passive.",
        },
        {
          num: "04",
          title: "SCD Type 2 rollback after a failed load",
          tag: "Recovery · SCD2",
          color: "coral",
          problem:
            "A partially failed load leaves the dimension in a broken state — some rows expired prematurely, some new rows inserted but not all. No backup exists. The challenge: restore every affected dimension to its exact pre-load state.",
          solution:
            "A $$AsOfDate parameter file drives recovery. Step 1: reopen expired rows where expiry_date = $$AsOfDate (reset to 9999-12-31). Step 2: delete new rows where effective_date = $$AsOfDate. Step 3: delete partial fact rows by load_date. Order is critical — always reopen before delete or the chain back to prior state is lost.",
        },
        {
          num: "05",
          title: "Session lock TM_6273 from pre-session SQL",
          tag: "PowerCenter · Operations",
          color: "amber",
          problem:
            "Cleanup SQL placed in the session's pre-session SQL field caused a TM_6273 timeout and a session lock that never released. The session was waiting for a database lock it couldn't acquire — because the session itself held it. The error message gave no indication of the real cause.",
          solution:
            "Move all pre-load SQL to a Command Task that runs before the session in the workflow. Command Tasks execute outside the session context — no lock conflict possible. The fix was a configuration move, not a code change. Two hours of debugging for a one-minute fix.",
        },
      ],
    },
  },
  {
    id: "etl-automation",
    title: "Social Media Analytics Pipeline",
    brief:
      "Built a real-time ingestion pipeline for Facebook & X using Databricks, Spark Structured Streaming and Delta Live Tables (DLT)",
    techStack: ["Databricks", "Spark Structured Streaming", "Delta Live Tables (DLT)", "PySpark", "Jobs Orchestration"],
    coverImage: "",
    details: {
      idea: "This project is a complete end-to-end data engineering pipeline that ingests real-time social media content from Facebook (Meta Graph API) and X (Twitter API v2), builds a Medallion Architecture (Bronze → Silver → Gold), and automatically generates analytics outputs.",
      whatWeDid:
        "Built a Medallion Architecture (Bronze → Silver → Gold) using Delta Live Tables (DLT) and Auto Loader, orchestrating the entire workflow with a Databricks Job running every 24 hours to automatically generate daily analytics outputs.",
      steps: [
        "Extracted data from Facebook Graph API (handling 2-hour token validity & public page restrictions)",
        "Extracted data from X (Twitter) API v2 (handling 100 tweets/month, 10 tweets/request limits)",
        "Ingested raw JSON into the Bronze layer using Auto Loader with incremental file discovery and _rescued_data",
        "Built the Silver layer using Delta Live Tables (DLT) to flatten nested structures, standardize schemas, convert timestamps, and compute engagement scores",
        "Built the Gold layer using Materialized Views to generate daily engagement metrics per platform, top 5 overall posts, and top 3 posts per platform",
        "Orchestrated the pipeline with a Databricks Job running every 24 hours",
        "Exported results as daily partitioned CSVs for BI tools",
      ],
      stats: [
        { value: "2", label: "Data Sources" },
        { value: "3", label: "Medallion Layers" },
        { value: "24", label: "Hour Frequency" },
        { value: "3", label: "Gold Tables" },
      ],
      overviewCards: [
        {
          heading: "Goal",
          body: "Ingest real-time social media content from Facebook (Meta Graph API) and X (Twitter API v2), and automatically generate analytics outputs such as top performing posts and engagement metrics.",
        },
        {
          heading: "Pipeline Approach",
          body: "Applied a Medallion Architecture (Bronze → Silver → Gold) using Databricks Auto Loader for raw JSON ingestion and Delta Live Tables (DLT) for data standardization and aggregations.",
        },
        {
          heading: "Key Transformations",
          body: "Flattened nested post structures, standardized the schema across platforms, normalized timestamps, and computed engagement scores (likes + comments + shares).",
        },
        {
          heading: "Automation & Export",
          body: "Orchestrated via a Databricks Workflow combining Python scripts and DLT pipelines, extracting final multi-platform metrics into partitioned CSV files on DBFS.",
        },
      ],
      diagramSections: [
        {
          sectionPretitle: "02 — Architecture",
          sectionTitle: "High-Level Pipeline Overview",
          title: "End-to-End Workflow Diagram",
          subtitle: "API Sources → Raw JSON → Bronze → Silver → Gold → Daily CSVs",
          imagePath: "/src/assets/Image Mar 29, 2026, 10_42_07 PM.png",
        },
      ],
      challenges: [
        {
          num: "01",
          title: "Facebook Graph API Token Expiry",
          tag: "API Limitations",
          color: "teal",
          problem:
            "The Meta Graph API access token is only valid for 2 hours, and requires manual regeneration due to Meta restrictions. Public page access is also restricted without an App Review.",
          solution:
            "Used a friend’s page where I was added as Admin, and scoped the automated data ingestion to work within the token constraints or handle the short-lived tokens appropriately.",
        },
        {
          num: "02",
          title: "X (Twitter) API Rate Limits",
          tag: "Throttling",
          color: "purple",
          problem:
            "The X API v2 Free tier heavily limits extraction to 100 tweets per month and 10 tweets per request.",
          solution:
            "Handled by scheduling the ingestion strictly once per day and keeping extraction payloads minimal, avoiding quota exhaustion.",
        },
        {
          num: "03",
          title: "Handling Unexpected JSON Schemas",
          tag: "Data Ingestion",
          color: "blue",
          problem:
            "Social media APIs often change their payload structures, adding nested or undocumented fields randomly.",
          solution:
            "Leveraged Databricks Auto Loader with schema evolution and the _rescued_data column in the Bronze layer to safely catch unexpected fields without failing the pipeline.",
        },
        {
          num: "04",
          title: "Unified Cross-Platform Schema",
          tag: "Data Modeling",
          color: "amber",
          problem:
            "Facebook posts and X tweets have entirely different metadata (e.g., retweets vs shares, different timestamp formats).",
          solution:
            "Flattened and standardized all metrics into a unified Silver layer using DLT, defining a consistent engagement score (likes + comments + shares) and properly cast datetimes.",
        },
      ],
    },
  },
  {
    id: "data-warehouse",
    title: "Modern Data Warehouse with PySpark & dbt",
    brief:
      "A production-ready data warehouse built on Databricks Lakehouse combining PySpark for scalable streaming ingestion and dbt for modeling and SCD Type 2 snapshots.",
    techStack: ["Databricks", "dbt-core", "PySpark", "dbt-databricks", "Delta Lake", "Python", "SQL"],
    coverImage: "",
    details: {
      idea: "Design and implement a modern data warehouse on the Databricks Lakehouse leveraging PySpark for robust incremental ingestion and dbt for declarative transformations.",
      whatWeDid:
        "Built a production-ready Medallion Architecture (Bronze → Silver → Gold) that processes raw CSVs through PySpark Autoloader into Delta tables, performs CDC and upserts, and orchestrates dimensional modeling with dbt incremental models and SCD Type 2 snapshots.",
      steps: [
        "Ingested 6 source entities (customers, trips, payments, vehicles, drivers, locations) as raw CSVs into Databricks Volumes",
        "Built dynamic Bronze ingestion using PySpark Autoloader with Delta format, append mode, and checkpointing",
        "Developed a generic PySpark Transformation Class to handle deduplication with CDC, process timestamps, and Delta Lake Merge upserts",
        "Configured dbt-core and dbt-databricks adapters to define Bronze and Silver sources via sources.yml",
        "Built Silver incremental models (e.g., trips) in dbt using unique keys (trip_id) to only process new records",
        "Developed the Gold Layer leveraging dbt snapshots to track slowly changing dimensions (SCD Type 2) across DimCustomers, DimDrivers, etc.",
        "Created custom dbt macros to dynamically generate target schema names",
        "Modeled a Gold presentation layer comprising a FactTrips table and 5 detailed dimension tables",
      ],
      stats: [
        { value: "6", label: "Source Entities" },
        { value: "3", label: "Medallion Layers" },
        { value: "1", label: "Fact Table" },
        { value: "5", label: "Dimensions" },
      ],
      overviewCards: [
        {
          heading: "Goal",
          body: "Build a modern data warehouse on Databricks Lakehouse using PySpark for scalable ingestion & transformations and dbt for modeling, testing, and snapshots.",
        },
        {
          heading: "Streaming Ingestion",
          body: "Leveraged PySpark Autoloader to dynamically stream multiple raw CSV entities into Bronze Delta tables with exactly-once semantics via checkpointing.",
        },
        {
          heading: "Transformation & CDC",
          body: "Applied Change Data Capture (CDC) and Delta Lake upserts (Merge) within PySpark to build a clean, deduplicated Silver layer.",
        },
        {
          heading: "dbt Modeling & SCD2",
          body: "Used dbt to define incremental models and built the Gold dimensional model with automated Slowly Changing Dimension (SCD) Type 2 tracking via dbt snapshots.",
        },
      ],
      diagramSections: [
        {
          sectionPretitle: "02 — Architecture",
          sectionTitle: "Medallion Data Pipeline",
          title: "Architecture Diagram",
          subtitle: "Sources → Bronze (Autoloader) → Silver (dbt) → Gold (Snapshots)",
          imagePath: "/src/assets/dbt_architecture.svg",
        },
      ],
      challenges: [
        {
          num: "01",
          title: "Dynamic Multi-Entity Ingestion",
          tag: "PySpark",
          color: "teal",
          problem:
            "Writing separate ingestion pipelines for every source entity (customers, trips, payments, etc.) leads to massive boilerplate code and maintenance overhead.",
          solution:
            "Implemented a dynamic PySpark Autoloader loop that iterates over an entity array, reading from respective Databricks Volumes and dynamically assigning checkpoint locations and output Delta tables.",
        },
        {
          num: "02",
          title: "Managing Incremental Updates Elegantly",
          tag: "dbt",
          color: "purple",
          problem:
            "Transforming large raw datasets repeatedly wastes compute. We needed a clean way to apply incremental logic without hardcoding complex merge statements.",
          solution:
            "Used dbt's incremental materialization block (is_incremental()) based on the last_updated_timestamp to seamlessly append/update only new records in the Silver layer.",
        },
        {
          num: "03",
          title: "Tracking Historical Changes (SCD2)",
          tag: "Data Modeling",
          color: "blue",
          problem:
            "Capturing historical changes for dimensional attributes (like a driver changing their assigned vehicle) is complex to script manually in PySpark or raw SQL.",
          solution:
            "Leveraged dbt snapshots configured in YAML to automatically diff incoming Silver table records and maintain SCD Type 2 validity columns (dbt_valid_from / dbt_valid_to) in the Gold layer.",
        },
      ],
    },
  },
];
