// ============================================
// 博客数据 - 文章和项目
// ============================================

const blogData = {
    // 文章数据
    articles: [
        {
            id: 1,
            title: "深入理解 JavaScript 异步编程",
            excerpt: "从回调地狱到 Promise，再到 async/await，全面解析 JavaScript 异步编程的演进历程。",
            tag: "frontend",
            tagLabel: "前端",
            date: "2026-02-28",
            readTime: "12 分钟",
            image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800",
            url: "articles/javascript-async.html"
        },
        {
            id: 2,
            title: "React 性能优化实践指南",
            excerpt: "深入探讨 React 应用的性能优化策略，包括 memo、useMemo、useCallback 的正确使用方式。",
            tag: "frontend",
            tagLabel: "前端",
            date: "2026-02-20",
            readTime: "15 分钟",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
            url: "articles/react-performance.html"
        },
        {
            id: 3,
            title: "PostgreSQL 高级查询技巧",
            excerpt: "掌握窗口函数、CTE、递归查询等高级特性，让你的 SQL 查询更强大。",
            tag: "backend",
            tagLabel: "后端",
            date: "2026-02-15",
            readTime: "10 分钟",
            image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800",
            url: "articles/postgresql-advanced.html"
        },
        {
            id: 4,
            title: "Docker Compose 实战：构建微服务开发环境",
            excerpt: "使用 Docker Compose 快速搭建本地微服务开发环境，提升开发效率。",
            tag: "devops",
            tagLabel: "DevOps",
            date: "2026-02-10",
            readTime: "18 分钟",
            image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800",
            url: "articles/docker-compose-microservices.html"
        },
        {
            id: 5,
            title: "系统设计面试：如何设计一个短链接服务",
            excerpt: "从需求分析到架构设计，详解短链接服务的技术方案。",
            tag: "thoughts",
            tagLabel: "思考",
            date: "2026-02-05",
            readTime: "20 分钟",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
            url: "articles/system-design-url-shortener.html"
        },
        {
            id: 6,
            title: "TypeScript 5.0 新特性解析",
            excerpt: "探索 TypeScript 5.0 带来的装饰器改进、const 类型参数等新特性。",
            tag: "frontend",
            tagLabel: "前端",
            date: "2026-01-28",
            readTime: "8 分钟",
            image: "https://images.unsplash.com/photo-1516116216624-53e697fed25a?w=800",
            url: "articles/typescript-5-features.html"
        }
    ],

    // 项目数据
    projects: [
        {
            id: 1,
            title: "个人博客系统",
            description: "基于 React + Node.js + PostgreSQL 构建的全栈博客平台，支持 Markdown 编辑、评论系统、RSS 订阅。",
            tags: ["React", "Node.js", "PostgreSQL", "TypeScript"],
            image: "📝",
            github: "https://github.com/vangee0528/blog",
            demo: "https://vangee0528.github.io"
        },
        {
            id: 2,
            title: "AI 智能助手",
            description: "基于 LangChain 和 OpenAI API 构建的智能对话助手，支持多轮对话、知识库检索、文件解析。",
            tags: ["Python", "LangChain", "OpenAI", "FastAPI"],
            image: "🤖",
            github: "https://github.com/vangee0528/ai-assistant",
            demo: ""
        },
        {
            id: 3,
            title: "实时协作白板",
            description: "支持多人实时协作的在线白板应用，使用 WebSocket 实现毫秒级同步。",
            tags: ["Vue 3", "WebSocket", "Canvas", "Node.js"],
            image: "🎨",
            github: "https://github.com/vangee0528/collab-board",
            demo: "https://collab-board.demo.com"
        },
        {
            id: 4,
            title: "自动化部署平台",
            description: "基于 Docker 和 Kubernetes 的 CI/CD 自动化部署平台，支持多环境管理。",
            tags: ["Go", "Docker", "Kubernetes", "CI/CD"],
            image: "🚀",
            github: "https://github.com/vangee0528/deploy-platform",
            demo: ""
        },
        {
            id: 5,
            title: "代码片段管理器",
            description: "跨平台代码片段管理工具，支持语法高亮、标签分类、快速搜索。",
            tags: ["Electron", "React", "SQLite", "CodeMirror"],
            image: "💾",
            github: "https://github.com/vangee0528/snippet-manager",
            demo: ""
        },
        {
            id: 6,
            title: "微信小程序商城",
            description: "完整的微信小程序电商解决方案，包含商品管理、购物车、订单系统。",
            tags: ["微信小程序", "Node.js", "MongoDB", "Redis"],
            image: "🛒",
            github: "https://github.com/vangee0528/wx-mall",
            demo: ""
        }
    ]
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = blogData;
}