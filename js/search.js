function search()
{
    var input, filter, cards, cardContainer, h5, title, i;

    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();

    cardContainer = document.getElementById("froglist");
    cards = cardContainer.getElementsByClassName("card-hover");

    for (i = 0; i < cards.length; i++)
    {
        title = cards[i].querySelector(".card-body p.card-text");

        if (title.innerText.toUpperCase().indexOf(filter) > -1)
        {
            cards[i].style.display = "";
        }
        else
        {
            cards[i].style.display = "none";
        }
    }
}
