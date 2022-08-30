let config = {
    darkMode: true,
    layout: "default",
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
        case 'minimal':
            defaultBackgroundColor = darkMode ? '#363c49' : '#ffffff';
            css = minimalLayout(textColor, backgroundColor, borderColor);
            break;
        default:
            defaultBackgroundColor = darkMode ? "#181e23" : "#f9f9f9";
            if (backgroundColor.length == 0) backgroundColor = defaultBackgroundColor;
            css = defaultLayout(textColor, backgroundColor, borderColor);
            break;
    };
    css = darkMode ? css.replace(/^ +/gm, '') : `body {background-color: ${backgroundColor};}`;
    $("<style>").prop("type", "text/css").html(css).appendTo("head");
}

function minimalLayout(textColor, backgroundColor, borderColor) {
    return `
    body {
        background-color: ${backgroundColor};
        color: ${textColor};
        font-size: 16px;
        padding: 0px 15px; }
    .content, .content__main, .content__secondary {
        background: ${backgroundColor};
        border: 0px; }
    .content__main {
        border-right: 1px solid ${borderColor} !important; }
    .content__headings {
        border: 0px solid #000; }
    .content__heading, .form__section-heading {
        background: ${backgroundColor};
        color: ${textColor};
        border-bottom: 1px solid ${borderColor};
        padding: 20px; }
    .content__heading--mobile {
        background: ${backgroundColor};
        border: 1px solid ${borderColor}; }
    .form__section--boxed {
        border: 0px solid ${borderColor};
        border-radius: 4px; }
    .form__field--boxed {
        border: 1px solid ${borderColor}; }
    .form__section--boxed header {
        background: ${backgroundColor};
        border-bottom: 1px solid ${borderColor};
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        margin: 0;
        padding: 10px; }
    .form__section--billing-address .form__field-radio-group .radio > .form__fields {
        margin: 10px 0px; }
    .form__section--billing-address .form__field-radio-group .radio > .form__field {
        margin: 20px 10px 0px 10px; }
    .form__field-radio-group {
        border: 1px solid ${borderColor}; }
    .form__field-radio-group .radio header {
        background: ${backgroundColor};
        color: ${textColor}; }
    .form__field-radio-group .radio:not(:last-child) header {
        border-bottom: 1px solid ${borderColor}; }
    h1, h2 {
        font-size: 18px;
        color: ${textColor};
        margin: 0;
        font-weight: 500; }
    h3 {
        padding-left: 0px !important; }
    .plan__summary-total {
        font-size: 18px;
        color: ${textColor};
        border-top: 1px solid ${borderColor}; }
    `
}

function defaultLayout(textColor, backgroundColor, borderColor) {
    return `
    body {background-color: ${backgroundColor};}
    .header, .header h1, .footer__operated-by-link, .footer__privacy-policy-link, h2, h3, h4 {
        color: ${textColor} }
    .content, .content__main, .form__field-radio-group {
        background-color: #232a31;
        color: ${textColor};
        border: 0px solid ${borderColor}; }
    .content__headings, .content__heading--mobile, .form__section--credit-card header, .form__section--configure-plan .form__field--boxed, .form__section--billing-address .form__field-radio-group .radio header {
        background: ${backgroundColor};
        border: 1px solid ${borderColor} }
    .form__section--boxed header {
        border: 0px;
        border-bottom: 1px solid ${borderColor};
        border-top-left-radius: 4px;
        border-top-right-radius: 4px; }
    .content__heading {
        background: ${backgroundColor};
        border-bottom: 0px solid ${borderColor}; }
    .form__field-radio-group .radio:not(:last-child) header {
        border-bottom: 1px solid ${borderColor} }
    .form__section--credit-card {
        border: 1px solid ${borderColor} }
    .content__main {
        border-right: 1px solid ${borderColor} }
`
}

applyAccentColors(config.accentColor, config.hoverColor);
applyLayout(config.layout, config.darkMode, config.backgroundColor);