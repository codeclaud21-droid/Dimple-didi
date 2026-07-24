"use strict";

/* ==========================================================
   DIMPLE DI WEBSITE
   app.js
   Part 1 - Application Foundation
   ========================================================== */

/* ---------- Configuration ---------- */

const APP_CONFIG = {

    loadingDuration: 4000,

    redirectPage: "date-check.html",

    progressStart: 0,

    progressEnd: 100

};

/* ---------- DOM Ready ---------- */

document.addEventListener("DOMContentLoaded", () => {

    initializeApplication();

});

/* ---------- Application ---------- */

function initializeApplication() {

    cacheElements();

    initializeLoadingScreen();

}

/* ---------- Elements ---------- */

let loadingScreen = null;
let progressFill = null;
let progressText = null;

/* ---------- Cache ---------- */

function cacheElements() {

    loadingScreen = document.getElementById("loading-screen");

    progressFill = document.getElementById("progress-fill");

    progressText = document.getElementById("progress-text");

}

/* ---------- Helper ---------- */

function elementExists(element) {

    return element !== null;

}
/* ==========================================================
   Part 2 - Loading Progress
   ========================================================== */

let progressValue = APP_CONFIG.progressStart;
let loadingInterval = null;

/* ---------- Loading Screen ---------- */

function initializeLoadingScreen() {

    if (
        !elementExists(progressFill) ||
        !elementExists(progressText)
    ) {
        return;
    }

    startLoading();

}

/* ---------- Start Loading ---------- */

function startLoading() {

    const updateSpeed =
        APP_CONFIG.loadingDuration /
        APP_CONFIG.progressEnd;

    loadingInterval = setInterval(() => {

        progressValue++;

        updateLoadingUI(progressValue);

        if (progressValue >= APP_CONFIG.progressEnd) {

            clearInterval(loadingInterval);

            loadingCompleted();

        }

    }, updateSpeed);

}

/* ---------- Update UI ---------- */

function updateLoadingUI(value) {

    progressFill.style.width = `${value}%`;

    progressText.textContent = `${value}%`;

}
/* ==========================================================
   Part 3 - Loading Complete & Redirect
   ========================================================== */

/* ---------- Loading Finished ---------- */

function loadingCompleted() {

    if (elementExists(loadingScreen)) {

        loadingScreen.classList.add("page-exit");

    }

    setTimeout(() => {

        redirectToNextPage();

    }, 600);

}

/* ---------- Redirect ---------- */

function redirectToNextPage() {

    window.location.href = APP_CONFIG.redirectPage;

}

/* ---------- Safe Redirect ---------- */

window.addEventListener("pageshow", () => {

    progressValue = APP_CONFIG.progressStart;

});
/* ==========================================================
   Part 4 - Global Utilities
   ========================================================== */

/* ---------- Show Element ---------- */

function showElement(element) {

    if (!elementExists(element)) return;

    element.classList.remove("d-none");

}

/* ---------- Hide Element ---------- */

function hideElement(element) {

    if (!elementExists(element)) return;

    element.classList.add("d-none");

}

/* ---------- Toggle Class ---------- */

function toggleClass(element, className) {

    if (!elementExists(element)) return;

    element.classList.toggle(className);

}

/* ---------- Add Class ---------- */

function addClass(element, className) {

    if (!elementExists(element)) return;

    element.classList.add(className);

}

/* ---------- Remove Class ---------- */

function removeClass(element, className) {

    if (!elementExists(element)) return;

    element.classList.remove(className);

}

/* ---------- Console ---------- */

console.log("Dimple Di Website Initialized");
