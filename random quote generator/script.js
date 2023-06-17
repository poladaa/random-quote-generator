"use strict";
const btn = document.querySelector(".btn");
const authorName = document.querySelector(".author");
const quoteText = document.getElementById("quote");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  quoteText.textContent = "Updating...";
  btn.textContent = "Loading...";
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    authorName.textContent = "``" + data.author;
    quoteText.textContent = data.content;
    btn.textContent = "Get a Quote";
  } catch (error) {
    quoteText.textContent = "No Internet Connection";
    authorName.textContent = "Error";
  }
}

btn.addEventListener("click", getQuote);
