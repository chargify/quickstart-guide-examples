let config = {
    darkMode: false,
    layout: "minimal",
    googleFont: "",
    accentColor: "#ff3657",
    hoverColor: "#df304c",
    backgroundColor: "#ffa9b1",
    requireOrg: false,
    requirePhone: false,
    requireCustomFields: [],
    hideCustomFields: [],
    hideRecurringFee: false,
    hideComponentFee: false,
    hidePhone: false,
    hideOrg: false,
    hideHeader: false,
    hideNoneOption: false,
    replaceText: [],
    debugMode: false,
    livePreview: false
};

function applyAccentColors(accent, hover = accent) {
    let css = `
    #subscription_submit, #form__section-apply-components, .form__button--primary, .btn-success {
        border: solid 2px ${accent};
        background-color: ${accent};
        color: '#FFF'; }
    #form__section-apply-components:hover, #subscription_submit:hover, .form__button--is-submitting,
    .form__button--primary:hover, .form__button--primary:active, .form__button--primary:focus,
    .form__button--primary:disabled, .btn-success:hover {
        background-color: ${hover};
        border: solid 2px ${hover};
        color: '#FFF';
        background-image: none; }
    .plan__summary-total { color: ${accent}; }
    .content__heading--mobile .content__heading-section--total {
        color: #ffffff; }
    `;
    $("<style>").prop("type", "text/css").html(css).appendTo("head");
}

function applyLayout(layout, darkMode, backgroundColor) {
    let textColor = darkMode ? '#f9f9f9' : '#000000';
    let borderColor = darkMode ? '#ffffff30' : '#00000030';
    let css = "";
    let defaultBackgroundColor = "";
    switch (layout) {
        default:
            defaultBackgroundColor = darkMode ? "#181e23" : "#f9f9f9";
            if (backgroundColor.length == 0 ) backgroundColor = defaultBackgroundColor;
            css = `body {background-color: ${backgroundColor};}`;
            console.log(css)
            if (!darkMode) break;

            css += `
                .header, .header h1, .footer__operated-by-link, .footer__privacy-policy-link, h2, h3, h4 {
                    color: #f9f9f9 }
                .content, .content__main, .form__field-radio-group {
                    background-color: #232a31;
                    color: #f9f9f9;
                    border: 0px solid ${borderColor}; }
                .content__headings, .content__heading--mobile, .form__section--credit-card header, .form__section--configure-plan .form__field--boxed, .form__section--billing-address .form__field-radio-group .radio header {
                    background: #38434f;
                    border: 1px solid ${borderColor} }
                .form__section--boxed header {
                    border: 0px;
                    border-bottom: 1px solid ${borderColor};
                    border-top-left-radius: 4px;
                    border-top-right-radius: 4px; }
                .content__heading {
                    background: #38434f;
                    border-bottom: 0px solid ${borderColor}; }
                .form__field-radio-group .radio:not(:last-child) header {
                    border-bottom: 1px solid ${borderColor} }
                .form__section--credit-card {
                    border: 1px solid ${borderColor} }
                .content__main {
                    border-right: 1px solid ${borderColor} }
            `;
            break;
    };
    css = css.replace(/^ +/gm, '');
    $("<style>").prop("type", "text/css").html(css).appendTo("head");
}

applyAccentColors(config.accentColor, config.hoverColor);
applyLayout(config.layout, config.darkMode, config.backgroundColor);