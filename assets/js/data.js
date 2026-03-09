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
            url: "posts/javascript-async.html"
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
            url: "posts/react-performance.html"
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
            url: "posts/postgresql-advanced.html"
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
            url: "posts/docker-compose-microservices.html"
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
            url: "posts/system-design-url-shortener.html"
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
            url: "posts/typescript-5-features.html"
        }
    ],

    // 项目数据
    projects: [
        {
            id: 1,
            title: "炉羽饰品生产管理系统",
            description: "基于 Flutter 开发的跨平台生产管理应用，支持员工管理、产品管理、生产记录、工资统计等功能。采用 SQLite 本地存储，支持离线运行和 WebDAV 云备份。",
            tags: ["Flutter", "SQLite", "Provider"],
            image: "🏭",
            github: "",
            demo: "",
            detail: "../projects/luyu_manager.html",
            highlights: [
                "跨平台支持 Windows 和 Android",
                "计件/计时两种员工工资模式",
                "自动工资计算与 Excel 报表导出",
                "本地备份与 WebDAV 云备份"
            ]
        },
        {
            id: 2,
            title: "数值分析作业集 (NA2024)",
            description: "浙江大学 2024 年数值分析课程作业集，包含理论作业、编程作业和期末项目。实现了方程求解、插值方法、样条曲线拟合等核心算法。",
            tags: ["C++", "Python", "数值分析", "算法"],
            image: "📊",
            github: "https://github.com/vangee0528/NA2024",
            demo: "",
            detail: "../projects/na2024.html",
            highlights: [
                "理论作业 4 次，涵盖数值分析核心理论",
                "编程作业 2 次，C++ 实现方程求解与插值算法",
                "期末项目：B 样条曲线拟合库，支持 JSON 配置"
            ]
        }
    ]
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = blogData;
}