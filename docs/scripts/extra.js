function updateMetaTag(property, content) {
    let metaTag = document.querySelector(`meta[property="${property}"]`);
    
    if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
    }
    
    metaTag.setAttribute('content', content);
    return metaTag;
}

function getFAQDescription() {
    const hash = window.location.hash.substring(1);
    if (!hash) return null;
    
    const faqHeader = document.getElementById(hash);
    if (!faqHeader) return null;
    
    let currentNode = faqHeader.nextElementSibling;
    let descriptionParts = [];
    
    while (currentNode && currentNode.tagName !== 'H3') {
        if (currentNode.textContent.trim()) {
            descriptionParts.push(currentNode.textContent.trim());
        }
        currentNode = currentNode.nextElementSibling;
    }
    
    if (descriptionParts.length > 0) {
        return descriptionParts.join(' ').replace(/\s+/g, ' ').substring(0, 300);
    }
    
    return null;
}

function updateAllSocialMetaTags() {
    const pageTitle = document.title || 
                     document.querySelector('.md-header__title')?.textContent?.trim() || 
                     document.querySelector('h1')?.textContent?.trim() || 
                     "Embed Title";
    
    let pageDescription = getFAQDescription();
    
    if (!pageDescription) {
        pageDescription = document.querySelector('meta[name="description"]')?.content || 
                         document.querySelector('meta[property="og:description"]')?.content ||
                         document.querySelector('article p')?.textContent?.trim()?.substring(0, 160) || 
                         "Site Description";
    }
    
    pageDescription = pageDescription.replace(/\s+/g, ' ').trim();
    
    updateMetaTag('og:title', pageTitle);
    updateMetaTag('og:description', pageDescription);
    updateMetaTag('og:url', window.location.href);
    updateMetaTag('og:type', 'website');
    updateMetaTag('twitter:card', 'summary');
    updateMetaTag('twitter:title', pageTitle);
    updateMetaTag('twitter:description', pageDescription);
    

}

updateAllSocialMetaTags();

function setupNavigationObservers() {
    if (typeof app !== 'undefined' && app.document$) {
        app.document$.subscribe(() => {
            setTimeout(updateAllSocialMetaTags, 50);
        });
    }
    
    const contentObserver = new MutationObserver((mutations) => {
        if (document.querySelector('.md-content__inner')) {
            updateAllSocialMetaTags();
        }
    });
    
    contentObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    
    history.pushState = function() {
        originalPushState.apply(this, arguments);
        setTimeout(updateAllSocialMetaTags, 50);
    };
    
    history.replaceState = function() {
        originalReplaceState.apply(this, arguments);
        setTimeout(updateAllSocialMetaTags, 50);
    };
    
    window.addEventListener('popstate', () => {
        setTimeout(updateAllSocialMetaTags, 50);
    });
    
    window.addEventListener('hashchange', () => {
        setTimeout(updateAllSocialMetaTags, 50);
    });
    
    setInterval(updateAllSocialMetaTags, 1000);
}

setupNavigationObservers();