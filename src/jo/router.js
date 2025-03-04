

// class Router {
//   constructor() {
//     this.routes = import.meta.glob('../app/**/page.js');
//     this.layouts = import.meta.glob('../app/**/layout.js');
//     this.mainApp = import.meta.glob('../app/app.js');
//     this.init();
//   }

//   async loadPageScript(url) {
//     let scriptPath = url === '/' ? '../app/app.js' : `../app${url}/page.js`;
//     const matchedPath = Object.keys(this.routes).find((path) => path.endsWith(scriptPath.replace('../', '')))
//       || (url === '/' && Object.keys(this.mainApp)[0]);

//     try {
//       const module = await (this.routes[matchedPath] || this.mainApp[matchedPath])();
//       const renderFunction = module.default;

//       // ✅ جلب أقرب Layout للصفحة
//       const { layout, position } = await this.getClosestLayout(matchedPath);

//       return () => {
//         let content = renderFunction(); // الصفحة الرئيسية

//         if (layout) {
//           const layoutElement = layout(position); // ✅ تمرير البارامتر عند استدعاء `Layout`
//           if (!(layoutElement instanceof HTMLElement)) {
//             console.error('🚨 layout.js يجب أن يُرجع عنصر HTML:', layoutElement);
//             return content;
//           }

//           if (position === 'end') {
//             content.appendChild(layoutElement); // ✅ وضع الـ Layout في الأسفل
//           } else {
//             layoutElement.appendChild(content); // ✅ وضع الـ Layout في الأعلى
//             content = layoutElement;
//           }
//         }

//         return content;
//       };
//     } catch (error) {
//       console.error(`🚨 Error loading script: ${matchedPath}`, error);
//       return this.renderNotFound();
//     }
//   }

//   async getClosestLayout(path) {
//     const pathParts = path.split('/');

//     while (pathParts.length > 2) {
//       pathParts.pop();
//       const layoutPath = `${pathParts.join('/')}/layout.js`;
//       if (this.layouts[layoutPath]) {
//         const layoutModule = await this.layouts[layoutPath]();
//         return {
//           layout: layoutModule.default,
//           position: layoutModule.position || 'start', // ✅ استخدام `start` افتراضيًا
//         };
//       }
//     }

//     return { layout: null, position: 'start' };
//   }

//   async updateView(url, addToHistory = true) {
//     const root = document.getElementById('root');
//     const renderFunction = await this.loadPageScript(url);

//     if (renderFunction) {
//       root.innerHTML = '';
//       root.appendChild(renderFunction());
//     }

//     if (addToHistory) history.pushState({}, '', url);
//   }

//   renderNotFound() {
//     const div = document.createElement('div');
//     div.innerHTML = `<div style="width:100%;height:100vh;display:flex; flex-direction:column; justify-content:center;align-items:center; background-color: black; color:'white">
//       <h1 style="color: white;">Page Not Found</h1>
//       <img src="/404 error with portals-pana.svg" width="500" />
//     </div>`;
//     return () => div;
//   }

//   init() {
//     document.addEventListener('DOMContentLoaded', () => {
//       this.updateView(window.location.pathname, false);
//     });

//     window.addEventListener('popstate', () => {
//       this.updateView(window.location.pathname, false);
//     });

//     document.body.addEventListener('click', (e) => {
//       const link = e.target.closest('a');
//       if (link && link.getAttribute('href')?.startsWith('/')) {
//         e.preventDefault();
//         this.updateView(link.getAttribute('href'));
//       }
//     });
//   }
// }

// const router = new Router();
// export default Router;


class Router {
  constructor() {
    this.routes = import.meta.glob('../app/**/page.js');
    this.layouts = import.meta.glob('../app/**/layout.js');
    this.mainApp = import.meta.glob('../app/app.js');

    this.init();
  }

  // async loadPageScript(url) {
  //   let scriptPath = url === '/' ? '../app/app.js' : `../app${url}/page.js`;

  //   // ✅ معالجة المسارات الديناميكية [id]
  //   // const matchedPath = Object.keys(this.routes).find((path) => {
  //   //   const normalizedPath = path.replace('../app', '').replace('/page.js', '');
  //   //   const regex = new RegExp(`^${normalizedPath.replace(/\[.*?\]/g, '[^/]+')}$`);
  //   //   return regex.test(url);
  //   // }) || (url === '/' && Object.keys(this.mainApp)[0]);

  //   const normalizedRoutes = Object.keys(this.routes).map(path => ({
  //     path,
  //     normalizedPath: path.replace('../app', '').replace('/page.js', ''),
  //     isDynamic: /\[.*?\]/.test(path) // ✅ معرفة هل هو ديناميكي أم لا
  //   }));

  //   // ✅ أولوية البحث: 1️⃣ الصفحات العادية 2️⃣ المسارات الديناميكية [id]
  //   const exactMatch = normalizedRoutes.find(r => r.normalizedPath === url && !r.isDynamic);
  //   const dynamicMatch = normalizedRoutes.find(r => {
  //     if (r.isDynamic) {
  //       const regex = new RegExp(`^${r.normalizedPath.replace(/\[.*?\]/g, '[^/]+')}$`);
  //       return regex.test(url);
  //     }
  //   });

  //   const matchedPath = exactMatch ? exactMatch.path : dynamicMatch ? dynamicMatch.path : (url === '/' && Object.keys(this.mainApp)[0]);


  //   try {
  //     const module = await (this.routes[matchedPath] || this.mainApp[matchedPath])();
  //     const renderFunction = module.default;

  //     // ✅ جلب أقرب Layout للصفحة
  //     const { layout, position } = await this.getClosestLayout(matchedPath);

  //     return () => {
  //       let content = renderFunction(); // الصفحة الرئيسية

  //       if (layout) {
  //         const layoutElement = layout(position); // ✅ تمرير البارامتر عند استدعاء `Layout`
  //         if (!(layoutElement instanceof HTMLElement)) {
  //           console.error('🚨 layout.js يجب أن يُرجع عنصر HTML:', layoutElement);
  //           return content;
  //         }

  //         if (position === 'end') {
  //           content.appendChild(layoutElement); // ✅ وضع الـ Layout في الأسفل
  //         } else {
  //           layoutElement.appendChild(content); // ✅ وضع الـ Layout في الأعلى
  //           content = layoutElement;
  //         }
  //       }

  //       return content;
  //     };
  //   } catch (error) {
  //     console.error(`🚨 Error loading script: ${matchedPath}`, error);
  //     return this.renderNotFound();
  //   }
  // }

  // async getClosestLayout(path) {
  //   const pathParts = path.split('/');

  //   while (pathParts.length > 2) {
  //     pathParts.pop();
  //     const layoutPath = `${pathParts.join('/')}/layout.js`;
  //     if (this.layouts[layoutPath]) {
  //       const layoutModule = await this.layouts[layoutPath]();
  //       return {
  //         layout: layoutModule.default,
  //         position: layoutModule.position || 'start', // ✅ استخدام `start` افتراضيًا
  //       };
  //     }
  //   }

  //   return { layout: null, position: 'start' };
  // }

  async loadPageScript(url) {
    let scriptPath = url === '/' ? '../app/app.js' : `../app${url}/page.js`;

    const normalizedRoutes = Object.keys(this.routes).map(path => ({
      path,
      normalizedPath: path.replace('../app', '').replace('/page.js', ''),
      isDynamic: /\[.*?\]/.test(path)
    }));

    const exactMatch = normalizedRoutes.find(r => r.normalizedPath === url && !r.isDynamic);
    const dynamicMatch = normalizedRoutes.find(r => {
      if (r.isDynamic) {
        const regex = new RegExp(`^${r.normalizedPath.replace(/\[.*?\]/g, '[^/]+')}$`);
        return regex.test(url);
      }
    });

    const matchedPath = exactMatch ? exactMatch.path : dynamicMatch ? dynamicMatch.path : (url === '/' && Object.keys(this.mainApp)[0]);

    try {
      const module = await (this.routes[matchedPath] || this.mainApp[matchedPath])();
      const renderFunction = module.default;

      // ✅ جلب أقرب Layout للصفحة وتمرير `children`
      const { layout, position } = await this.getClosestLayout(matchedPath);

      return () => {
        let content = renderFunction(); // الصفحة الرئيسية

        if (layout) {
          return layout({ children: content, position }); // ✅ تمرير `children` إلى `layout`
        }

        return content;
      };
    } catch (error) {
      console.error(`🚨 Error loading script: ${matchedPath}`, error);
      return this.renderNotFound();
    }
  }

  async getClosestLayout(path) {
    const pathParts = path.split('/');

    while (pathParts.length > 2) {
      pathParts.pop();
      const layoutPath = `${pathParts.join('/')}/layout.js`;
      if (this.layouts[layoutPath]) {
        const layoutModule = await this.layouts[layoutPath]();
        return {
          layout: layoutModule.default,
        };
      }
    }

    return { layout: null };
  }


  async updateView(url, addToHistory = true) {
    const root = document.getElementById('root');
    const renderFunction = await this.loadPageScript(url);

    if (renderFunction) {
      root.innerHTML = '';
      root.appendChild(renderFunction());
    }

    if (addToHistory) history.pushState({}, '', url);
  }

  renderNotFound() {
    const div = document.createElement('div');
    div.innerHTML = `<div style="width:100%;height:100vh;display:flex; flex-direction:column; justify-content:center;align-items:center; background-color: black; color:'white'">
      <h1 style="color: white;">Page Not Found</h1>
      <img src="/404 error with portals-pana.svg" width="500" />
    </div>`;
    return () => div;
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.updateView(window.location.pathname, false);
    });

    window.addEventListener('popstate', () => {
      this.updateView(window.location.pathname, false);
    });

    document.body.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link && link.getAttribute('href')?.startsWith('/')) {
        e.preventDefault();
        this.updateView(link.getAttribute('href'));
      }
    });
  }
}

const router = new Router();
export default Router;
