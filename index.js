// 当页面加载完成时执行初始化操作
window.addEventListener('load', () => {
    handlePageLoad();
});

// 处理页面加载
function handlePageLoad() {
    // 在页面加载时执行一些初始化操作，如数据加载、界面渲染等
    loadData()
        .then(renderPage)
        .catch(handleError);
}

// 模拟加载数据的函数
function loadData() {
    return new Promise((resolve, reject) => {
        // 在此处执行数据加载操作
        // 假设数据加载成功
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

// 模拟页面渲染的函数
function renderPage() {
    // 在此处执行页面渲染操作
    console.log('Page rendered successfully.');
}

// 处理错误的函数
function handleError(error) {
    // 在此处执行错误处理操作
    console.error('An error occurred:', error);
    // 可以向用户显示错误信息，或尝试重新加载页面等
}
