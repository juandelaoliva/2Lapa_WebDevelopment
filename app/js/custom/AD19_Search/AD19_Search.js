$(document).ready(function () {
    const words = ['Teilkasko', 'Teilkasko oder Vollkasko', 'Teileversicherung', 'Telefonkontakt'];

    $('#search-form').autocomplete({
        hints: words,
        placeholder: "Suchbegriff",
        width: 300,
        height: 30,
        showButton: false,
    })
});
