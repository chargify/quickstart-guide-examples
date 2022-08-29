let config = {
    darkMode: true,
    layout: "default",
    googleFont: "",
    accentColor: "#ff3657",
    hoverColor: "#df304c",
    backgroundColor: "",
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

applyAccentColors(config.accentColor, config.hoverColor);
