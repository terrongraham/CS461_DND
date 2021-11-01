const api_race = 'https://www.dnd5eapi.co/api/races/';
const api_classes = 'https://www.dnd5eapi.co/api/classes/';
const api_spells = '/levels/1/spells';
const api_proficiencies = '/proficiencies/'
const api_scores = 'https://www.dnd5eapi.co/api/ability-scores/';
const api_alignment = 'https://www.dnd5eapi.co/api/alignments/';
const api_background = 'https://www.dnd5eapi.co/api/backgrounds/';
const api_language = 'https://www.dnd5eapi.co/api/languages';
const api_OneSpell = 'https://www.dnd5eapi.co/api/spells/';
const api_equiment = 'https://www.dnd5eapi.co/api/equipment-categories/';
const api_skill = 'https://www.dnd5eapi.co/api/skills/';
const api_OneEquiment = 'https://www.dnd5eapi.co/api/equipment/'

// const race_input;
// const background_input;
// const class_input;
// const spells_input;
// const aligemnt_input;

window.addEventListener('load', (event) => {
    console.log("page is loaded");
    setupPage1();
    setupPage2();
    setupPage3();
    setupPage4();
    // setupPage5();
    setupPage6();
    setupPage7();
});


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function raceSelect() {
    document.getElementById("raceDropdown").classList.toggle("show");
    console.log("at the dropdowm bar");
}

function classSelect() {
    document.getElementById("classDropdown").classList.toggle("show");
    console.log("at the dropdowm bar");
}

function backgroundSelect() {
    document.getElementById("backgroundDropdown").classList.toggle("show");
    console.log("at the dropdowm bar");
}

function alignmentSelect() {
    document.getElementById("alignmentDropdown").classList.toggle("show");
    console.log("at the dropdowm bar");
}

function weaponSelect() {
    document.getElementById("weaponDropdown").classList.toggle("show");
    console.log("at the dropdowm bar");
}

function armorSelect() {
    document.getElementById("armorDropdown").classList.toggle("show");
    console.log("at the dropdowm bar");
}

function shieldSelect() {
    document.getElementById("shieldDropdown").classList.toggle("show");
    console.log("at the dropdowm bar");
}

function kitSelect() {
    document.getElementById("kitDropdown").classList.toggle("show");
    console.log("at the dropdowm bar");
}

function spellSelect() {
    document.getElementById("spellDropdown").classList.toggle("show");
    console.log("at the dropdowm bar");
}

function skillSelect() {
    document.getElementById("skillDropdown").classList.toggle("show");
    console.log("at the dropdowm bar");
}

function skill2Select() {
    document.getElementById("skill2Dropdown").classList.toggle("show");
    console.log("at the dropdowm bar");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

async function setupPage1() {
    console.log("starting");
    raceChoice();
}

async function setupPage2() {
    console.log("starting 2");
    classChoice();
}

async function setupPage3() {
    console.log("starting 3");
    backgroundChoice();
    alignmentChoice();
}

async function setupPage4() {
    printAblityScoreInfo();
    var button = document.querySelector('#roll');
    button.addEventListener('click', (event) => {
        printAblityScoreData();
    });
}

// async function setupPage5() {
//     console.log("starting 5");
//     skillChoice();
// }

async function setupPage6() {
    console.log("starting 6");
    spellChoice();
}

async function setupPage7() {
    console.log("starting 7");
    weaponChoice();
    // armorChoice();
}

function clickOnDropDownMenu(ul, func, button) {
    var items = ul.getElementsByTagName('li');
    console.log(button.textContent);
    console.log(items);
    //console.log(items[0].textContent);   // knows that textcontext works
    ul.addEventListener("click", function (e) {
        for (i = 0; i < items.length; i++) {
            if (e.target == items[i]) {
                console.log(items[i].textContent);
                func(items[i].textContent);
                button.textContent = items[i].textContent;
            }
        }
    });
}

function raceChoice() {
    var ul = document.getElementById('raceList');
    var button = document.getElementById('race_option');
    console.log(ul);
    clickOnDropDownMenu(ul, raceAsk, button);
}

function classChoice() {
    var ul = document.getElementById('classList');
    var button = document.getElementById('class_option');
    console.log(ul);
    clickOnDropDownMenu(ul, classAsk, button);
}

function backgroundChoice() {
    var ul = document.getElementById('backgroundList');
    var button = document.getElementById('background_option');
    console.log(ul);
    clickOnDropDownMenu(ul, backgroundAsk, button);
}

function alignmentChoice() {
    var ul = document.getElementById('alignmentList');
    var button = document.getElementById('alignment_option');
    console.log(ul);
    clickOnDropDownMenu(ul, alignmentAsk, button);
}

function weaponChoice() {
    var ul = document.getElementById('weaponList');
    var button = document.getElementById('weapon_option');
    var ul2 = document.getElementById('armorList');
    var button2 = document.getElementById('armor_option');
    var ul3 = document.getElementById('shieldList');
    var button3 = document.getElementById('shield_option');
    var ul4 = document.getElementById('kitList');
    var button4 = document.getElementById('kit_option');
    console.log(ul);
    clickOnDropDownMenu(ul, weaponAsk, button);
    clickOnDropDownMenu(ul2, armorAsk, button2);
    clickOnDropDownMenu(ul3, sheildAsk, button3);
    clickOnDropDownMenu(ul4, certianEquimentsAsk, button4);
}

// function armorChoice() {
//     var ul = document.getElementById('armorList');
//     var button = document.getElementById('armor_option');
//     console.log(ul);
//     clickOnDropDownMenu(ul, armorAsk, button);
// }

function skillChoice() {
    var ul = document.getElementById('skillList');
    var ul2 = document.getElementById('skill2List');
    var button = document.getElementById('skill_option');
    var button2 = document.getElementById('skill_option2');
    console.log(ul);
    clickOnDropDownMenu(ul2, skillAsk, button2);
    clickOnDropDownMenu(ul, skillAsk, button);
}

function spellChoice() {
    var ul = document.getElementById('spellList');
    var button = document.getElementById('spell_option');
    console.log(ul);
    clickOnDropDownMenu(ul, certianSpellsAsk, button);
}

/// Function that returns the from API
async function fetchDataFromAPI(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

async function raceAsk(input) {
    console.log("Race: " + input);
    var url = api_race + input;
    console.log(url);
    const data = await fetchDataFromAPI(url);
    printRaceData(data);
}

async function classAsk(input) {
    console.log("Class: " + input);
    var url = api_classes + input;
    const data = await fetchDataFromAPI(url);
    printClassData(data);
    spellsAsk(input);
    proficiencyAsk(input);
    skillChoice();
}

async function backgroundAsk(input) {
    if (input != "acolyte") {
        printExtraBackgroundData(input);
    } else if (input == "acolyte") {
        console.log("Class: " + input);
        var url = api_background + input;
        console.log(url);
        const data = await fetchDataFromAPI(url);
        printBackgroundData(data);
    }
}

async function alignmentAsk(input) {
    console.log("alignment: " + input);
    if (input == "None") {
        document.getElementById("alignment_choice").textContent = "None";
    } else {
        var url = api_alignment + input;
        const data = await fetchDataFromAPI(url);
        printAlignmentData(data);
    }
}

async function spellsAsk(input) {
    console.log("Spells for: " + input);
    var url = api_classes + input + api_spells;
    const data = await fetchDataFromAPI(url);
    printSpellsData(data);
}

async function proficiencyAsk(input) {
    var url = api_classes + input + api_proficiencies;
    const data = await fetchDataFromAPI(url);
    console.log("proficiencies for: " + input);
    console.log(data);
    getProficiencyData(data);
}

async function certianSpellsAsk(input) {
    console.log("Spells: " + input);
    var url = api_OneSpell + input;
    const data = await fetchDataFromAPI(url);
    printInfo_One_Spell(data);
}

async function skillAsk(input) {
    console.log("Skill: " + input);
    var url = api_skill + input;
    console.log(url);
    const data = await fetchDataFromAPI(url);
    printSkillsData(data);
}

async function equimentCategoryAsk(input) {
    ///console.log("Equiment for: " + input);
    var url = api_equiment + input;
    //var url = api_OneEquiment + input;
    const data = await fetchDataFromAPI(url);
    return await getEquimentListData(data);
    //getListofEquimentCategory(data)
}

async function certianEquimentsAsk(input) {
    console.log("Equiment for: " + input);
    var url = api_OneEquiment + input;
    const data = await fetchDataFromAPI(url);
    printInfo_One_Equiment(data);
}

async function armorAsk(input) {
    console.log("Equiment for: " + input);
    var url = api_OneEquiment + input;
    const data = await fetchDataFromAPI(url);
    printArmorInfo(data);
}

async function sheildAsk(input) {
    console.log("Equiment for: " + input);
    var url = api_OneEquiment + input;
    const data = await fetchDataFromAPI(url);
    printSheildInfo(data);
}

async function weaponAsk(input) {
    console.log("Equiment for: " + input);
    var url = api_OneEquiment + input;
    const data = await fetchDataFromAPI(url);
    printWeaponInfo(data);
}

async function abilityAsk(input) {
    console.log("Ability for: " + input);
    var url = api_scores + input;
    const data = await fetchDataFromAPI(url);
    getAblityScore(data, input);
}


async function printRaceData(data) {
    clearAbilityScoreBonuses();
    console.log(data);
    const { name, speed, ability_bonuses, alignment, age, size_description, starting_proficiencies,
        starting_proficiency_options, language_desc, traits, subraces } = data;


    if (starting_proficiency_options == undefined) {
        document.querySelector("#race-skill").textContent = "None";
    } else {
        proficiency_options_Array = starting_proficiency_options.from.map(function (el) {
            return el.name;
        });
        document.querySelector("#race-skill").textContent = proficiency_options_Array.join(',     ');
    }

    console.log("Name " + name);

    document.querySelector("#results").textContent = getNames(traits);
    document.querySelector('#name').textContent = name;
    document.querySelector('#speed_race').textContent = speed;
    document.querySelector('#size').textContent = size_description;
    document.querySelector('#race-age').textContent = age;
    document.querySelector('#race-alignment').textContent = alignment;
    document.querySelector('#language').textContent = language_desc;
    document.querySelector("#weapon").textContent = getNames(starting_proficiencies);
    document.querySelector("#subraces").textContent = getNames(subraces);
    document.querySelector("#bonuses").textContent = getNumberBonuses(ability_bonuses);
    printBonusData(ability_bonuses);
    console.log("printing");
}

async function printClassData(data) {
    let spell_list = document.getElementById("spellList")
    let weapon_list = document.getElementById("weaponList");
    let armor_list = document.getElementById("armorList");
    let shield_list = document.getElementById("shieldList");
    let kit_list = document.getElementById("kitList");
    let skill_list_1 = document.getElementById("skillList");
    let skill_list_2 = document.getElementById("skill2List");
    clearAllFromList(spell_list);
    clearAllFromList(weapon_list);
    clearAllFromList(armor_list);
    clearAllFromList(shield_list);
    clearAllFromList(kit_list);
    clearAllFromList(skill_list_1);
    clearAllFromList(skill_list_2);
    console.log(data);
    const { index, name, hit_die, proficiency_choices, starting_equipment_options, proficiencies, saving_throws, starting_equipment,
        class_levels, multi_classing, subclasses, spellcasting, spells } = data;

    console.log(name);
    console.log(hit_die);

    console.log(proficiency_choices);
    var array_skills = proficiency_choices.map(function (el) {
        return el.from;
    });


    var array_Skill_Names = new Array;
    for (var i = 0; i < array_skills.length; i++) {
        array_Skill_Names.push(getArrayOfIndexs(array_skills[i]));
    }

    createListOfProficiencyOptions(array_Skill_Names, skill_list_1);
    createListOfProficiencyOptions(array_Skill_Names, skill_list_2);

    var className = document.getElementById("class_name");
    var die = document.getElementById('hit');
    var throwHits = document.getElementById('throws');

    var wantedEquiment = document.getElementById("preffer_equiment")
    var casting = document.getElementById('spellscasting');
    var otherClasses = document.getElementById("subclasses");
    var skillsNum = document.getElementById("skills");

    className.textContent = name;
    die.textContent = hit_die;
    throwHits.textContent = getNames(saving_throws);

    skillsNum.textContent = getNumberChoose(proficiency_choices);
    wantedEquiment.textContent = getNames(proficiencies);
    console.log(spellcasting);
    casting.textContent = getInfoNames(spellcasting);
    otherClasses.textContent = getNames(subclasses);

    console.log("printing page 2");
}

async function printSpellsData(data) {
    var list = document.getElementById("spellList");
    const { count, results } = data;

    var spellsAllowed = document.getElementById('spells');

    spellsAllowed.textContent = getNames(results);

    var spellRange = document.getElementById('spell_range');
    var spellInfo = document.getElementById('spell_info');
    var spellName = document.getElementById('spell_name');

    if (count != 0) {
        createListOfSpellOptions(results, list);
    } else {
        createListOfSpellOptions("None", list);
        spellName.textContent = "None";
        spellInfo.textContent = "None";
        spellRange.textContent = "None";
    }
}

async function getProficiencyData(data) {
    let weapon_list = document.getElementById("weaponList");
    let armor_list = document.getElementById("armorList");
    let shield_list = document.getElementById("shieldList");
    let kit_list = document.getElementById("kitList");
    const { count, results } = data;

    createListOfEquimentOptions(results, weapon_list, armor_list, shield_list, kit_list);
}

async function printSkillsData(data) {
    console.log(data);
    const { name, desc } = data;

    var skill_info = document.getElementById('Pro_info');
    var skill_name = document.getElementById('Pro_name');
    skill_name.textContent = name
    skill_info.textContent = desc;

}

async function printInfo_One_Spell(data) {
    console.log(data);
    const { name, desc, range } = data;

    console.log(name);
    var spellRange = document.getElementById('spell_range');
    var spellInfo = document.getElementById('spell_info');
    var spellName = document.getElementById('spell_name');

    spellName.textContent = name;
    spellInfo.textContent = desc;
    spellRange.textContent = range;
}

async function printAlignmentData(data) {
    console.log("Aligemnet" + data);
    const { desc } = data
    document.getElementById("alignment_choice").textContent = desc;
}

async function printBackgroundData(data) {
    console.log("background" + data);
    const { name, language_options, starting_proficiencies, starting_equipment, feature,
        starting_equipment_options, personality_traits, ideals, bonds, flaws } = data;


    var beginnerSkills = document.getElementById('skills_needed');
    var wantedLanguages = document.getElementById("languages_options")
    var background_info = document.getElementById('background_des');
    var background_Skill_info = document.getElementById('background_Skill_info')

    var language_Array;

    if (language_options == undefined) {
        wantedLanguages.textContent = "None";
    } else {
        console.log(language_options);
        language_Array = language_options.from.map(function (el) {
            return el.name;
        });
        wantedLanguages.textContent = language_Array.join(',     ');
    }

    var Skill_array = getNames(starting_proficiencies);
    background_info.textContent = feature.desc;
    beginnerSkills.textContent = Skill_array;

    var items = Skill_array.toString().split(",");
    var skill_names = new Array;
    for (var i = 0, j = items.length; i < j; i++) {
        skill_names.push(items[i].replace("Skill:", ""));
    }

    background_Skill_info.textContent = skill_names;
    console.log("printing page 3");
}

async function printExtraBackgroundData(input) {
    console.log("background" + input);

    var beginnerSkills = document.getElementById('skills_needed');
    var wantedLanguages = document.getElementById("languages_options")
    var background_info = document.getElementById('background_des');
    var background_Skill_info = document.getElementById('background_Skill_info')

    if (input == "criminal") {
        beginnerSkills.textContent = "Deception, Stealth";
        wantedLanguages.textContent = "None";
        background_info.textContent = 'You are an experienced criminal with a history of' +
            ' breaking the law. You have spent a lot of time among ' +
            'other criminals and still have contacts within the' +
            'criminal underworld. You’re far closer than most people ' +
            'to the world of murder, theft, and violence that pervades ' +
            'the underbelly of civilization, and you have survived up to ' +
            'this point by flouting the rules and regulations of society ' +
            'You have a reliable and trustworthy contact who acts as ' +
            'your liaison to a network of other criminals. You know ' +
            'how to get messages to and from your contact, even over ' +
            'great distances; specifically, you know ' +
            'the local messengers, corrupt caravan masters, ' +
            'and seedy sailors who can deliver messages for you.';

        background_Skill_info.textContent = "Deception, Stealth";
    } else if (input == "folk-hero") {
        beginnerSkills.textContent = "Animal Handling, Survival";
        wantedLanguages.textContent = "None"
        background_info.textContent = "Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.";
        background_Skill_info.textContent = "Animal Handling, Survival";
    } else if (input == "noble") {
        beginnerSkills.textContent = "History, Persuasion";
        wantedLanguages.textContent = "One extra lanuage to select from";
        background_info.textContent = "Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.";
        background_Skill_info.textContent = "History, Persuasion";
    } else if (input == "sage") {
        beginnerSkills.textContent = "Arcana, History"
        wantedLanguages.textContent = "Any";
        background_info.textContent = "When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign";
        background_Skill_info.textContent = "Arcana, History";
    } else if (input == "soldier") {
        beginnerSkills.textContent = "Athletics, Intimidation";
        wantedLanguages.textContent = "None"
        background_info.textContent = "You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized";
        background_Skill_info.textContent = "Athletics, Intimidation";
    }
    console.log("printing page 3");
}

/// Creates the list of all the indexs within the weapons/armor/sheilds/kits equiment-catergoy API
async function getEquimentListData(data) {
    const { index, name, equipment } = data;
    console.log("Within getEquimentListData")

    let equiment_options_Array = equipment.map(function (el) {
        return el.index;
    });
    console.log("equiment_options_Array");
    console.log(equiment_options_Array);
    return equiment_options_Array;
}

async function printArmorInfo(data) {
    const { name, index, equipment_category, armor_category,
        armor_class, str_minimum, stealth_disadvantage, weight, cost } = data;

    var equimentInfo = document.getElementById('equiment_name');
    var weightInfo = document.getElementById('weight');
    var rangeInfo = document.getElementById('range');
    var danageInfo = document.getElementById('damage_info');
    var costrInfo = document.getElementById('cost_info');
    var equimentINfo = document.getElementById('equiment_info');
    var stealth_info = document.getElementById('stealth_info');
    var str_needed = document.getElementById('musle_info');
    var damageRoll =  document.getElementById('damage_roll');

    equimentInfo.textContent = name;
    weightInfo.textContent = weight;
    rangeInfo.textContent = "None";
    danageInfo.textContent = "None";
    costrInfo.textContent = cost;
    equimentINfo.textContent = "None";
    stealth_info.textContent = stealth_disadvantage;
    str_needed.textContent = str_minimum;
    damageRoll.textContent = "None";
}

async function printSheildInfo(data) {
    const { name, index, equipment_category, armor_category,
        armor_class, str_minimum, stealth_disadvantage, weight, cost } = data;

    var equimentInfo = document.getElementById('equiment_name');
    var weightInfo = document.getElementById('weight');
    var rangeInfo = document.getElementById('range');
    var danageInfo = document.getElementById('damage_info');
    var costrInfo = document.getElementById('cost_info');
    var equimentINfo = document.getElementById('equiment_info');
    var stealth_info = document.getElementById('stealth_info');
    var str_needed = document.getElementById('musle_info');
    var damageRoll =  document.getElementById('damage_roll');

    equimentInfo.textContent = name;
    weightInfo.textContent = weight;
    rangeInfo.textContent = "None";
    danageInfo.textContent = "None";
    costrInfo.textContent = cost;
    equimentINfo.textContent = "None";
    stealth_info.textContent = stealth_disadvantage;
    str_needed.textContent = str_minimum;
    damageRoll.textContent = "None";
}

async function printWeaponInfo(data) {
    const { index, name, equipment_category, weapon_category,
        category_range, cost, damage, range, weight } = data;

    var equimentInfo = document.getElementById('equiment_name');
    var weightInfo = document.getElementById('weight');
    var rangeInfo = document.getElementById('range');
    var danageInfo = document.getElementById('damage_info');
    var costrInfo = document.getElementById('cost_info');
    var equimentINfo = document.getElementById('equiment_info');
    var damageRoll =  document.getElementById('damage_roll');

    equimentInfo.textContent = name;
    weightInfo.textContent = weight;
    rangeInfo.textContent = "None";
    danageInfo.textContent = "None";
    costrInfo.textContent = cost;
    equimentINfo.textContent = "None";
    damageRoll.textContent = "None";
}

async function printInfo_One_Equiment(data) {
    const { index, name, cost, weight, desc } = data;

    var equimentInfo = document.getElementById('equiment_name');
    var weightInfo = document.getElementById('weight');
    var rangeInfo = document.getElementById('range');
    var danageInfo = document.getElementById('damage_info');
    var costrInfo = document.getElementById('cost_info');
    var equimentINfo = document.getElementById('equiment_info');
    var danageRoll =  document.getElementById('damage_roll');

    equimentInfo.textContent = name;
    weightInfo.textContent = weight;
    rangeInfo.textContent = "None";
    danageInfo.textContent = "None";
    costrInfo.textContent = cost;
    equimentINfo.textContent = desc;
    danageRoll.textContent = "None"
}

async function printAblityScoreData() {

    document.getElementById("STR").textContent = rollsForScore();
    document.getElementById('INT').textContent = rollsForScore();
    document.getElementById('WIS').textContent = rollsForScore();
    document.getElementById('CON').textContent = rollsForScore();
    document.getElementById("DEX").textContent = rollsForScore();
    document.getElementById('CHA').textContent = rollsForScore();
    addTotalForAbilityScore();
    console.log("results");
}

async function printAblityScoreInfo() {
    var wis_output
    var cha_output;
    var con_output;
    var int_output;
    var dex_output;
    var str_output;

    str_output = await abilityAsk('str');
    wis_output = await abilityAsk('wis');
    cha_output = await abilityAsk('cha');
    int_output = await abilityAsk('int');
    dex_output = await abilityAsk('dex');
    con_output = await abilityAsk('con');
}

async function getAblityScore(data, input) {
    const { desc, skills } = data;

    var str_des = document.getElementById('STR_des');
    var wis_des = document.getElementById('WIS_des');
    var cha_des = document.getElementById('CHA_des');
    var con_des = document.getElementById('CON_des');
    var int_des = document.getElementById('INT_des');
    var dex_des = document.getElementById('DEX_des');

    var str_info = document.getElementById('STR_info');
    var wis_info = document.getElementById('WIS_info');
    var cha_info = document.getElementById('CHA_info');
    var con_info = document.getElementById('CON_info');
    var int_info = document.getElementById('INT_info');
    var dex_info = document.getElementById('DEX_info');

    if (input == 'str') {
        str_des.textContent = desc;
        str_info.textContent = getNames(skills);
    } else if (input == 'wis') {
        wis_des.textContent = desc;
        wis_info.textContent = getNames(skills);
    } else if (input == 'int') {
        int_des.textContent = desc;
        int_info.textContent = getNames(skills);
    } else if (input == 'cha') {
        cha_des.textContent = desc;
        cha_info.textContent = getNames(skills);
    } else if (input == 'dex') {
        dex_des.textContent = desc;
        dex_info.textContent = getNames(skills);
    } else if (input == 'con') {
        con_des.textContent = desc;
        con_info.textContent = "For Everything";
    }
}

async function printBonusData(data) {
    console.log(data);
    var array = getNameBonuses(data);
    console.log(array[0]);
    var array_BounusName = getArrayOfNames(array);
    console.log(array_BounusName[0]);
    var array_Bounus = getArrayOfNumberBonuses(data);
    console.log("Bonus " + array_BounusName);
    console.log("Number Bonus " + array_Bounus);
    for (var i = 0; i < array_BounusName.length; i++) {
        if (array_BounusName[i] == "CON") {
            document.getElementById("CON_bonus").textContent = array_Bounus[i];
        } else if (array_BounusName[i] == "CHA") {
            document.getElementById("CHA_bonus").textContent = array_Bounus[i];
        } else if (array_BounusName[i] == "DEX") {
            document.getElementById("DEX_bonus").textContent = array_Bounus[i];
        } else if (array_BounusName[i] == "STR") {
            document.getElementById("STR_bonus").textContent = array_Bounus[i];
        } else if (array_BounusName[i] == "INT") {
            document.getElementById("INT_bonus").textContent = array_Bounus[i];
        } else if (array_BounusName[i] == "WIS") {
            document.getElementById("WIS_bonus").textContent = array_Bounus[i];
        }
    }
    addTotalForAbilityScore();
}

function addTotalForAbilityScore() {
    var str_total = document.getElementById('STR_total');
    var wis_total = document.getElementById('WIS_total');
    var cha_total = document.getElementById('CHA_total');
    var con_total = document.getElementById('CON_total');
    var int_total = document.getElementById('INT_total');
    var dex_total = document.getElementById('DEX_total');

    var str_bonus = document.getElementById('STR_bonus');
    var wis_bonus = document.getElementById('WIS_bonus');
    var cha_bonus = document.getElementById('CHA_bonus');
    var con_bonus = document.getElementById('CON_bonus');
    var int_bonus = document.getElementById('INT_bonus');
    var dex_bonus = document.getElementById('DEX_bonus');

    var str = document.getElementById('STR');
    var wis = document.getElementById('WIS');
    var cha = document.getElementById('CHA');
    var con = document.getElementById('CON');
    var int = document.getElementById('INT');
    var dex = document.getElementById('DEX');

    calcForAbilityScoreModifier(parseInt(str_bonus.textContent), parseInt(str.textContent), str_bonus);
    calcForAbilityScoreModifier(parseInt(wis_bonus.textContent), parseInt(wis.textContent), wis_bonus);
    calcForAbilityScoreModifier(parseInt(cha_bonus.textContent), parseInt(cha.textContent), cha_bonus);
    calcForAbilityScoreModifier(parseInt(con_bonus.textContent), parseInt(con.textContent), con_bonus);
    calcForAbilityScoreModifier(parseInt(int_bonus.textContent), parseInt(int.textContent), int_bonus);
    calcForAbilityScoreModifier(parseInt(dex_bonus.textContent), parseInt(dex.textContent), dex_bonus);

    str_total.textContent = (parseInt(str_bonus.textContent) + parseInt(str.textContent))
    wis_total.textContent = (parseInt(wis_bonus.textContent) + parseInt(wis.textContent))
    cha_total.textContent = (parseInt(cha_bonus.textContent) + parseInt(cha.textContent))
    con_total.textContent = (parseInt(con_bonus.textContent) + parseInt(con.textContent))
    int_total.textContent = (parseInt(int_bonus.textContent) + parseInt(int.textContent))
    dex_total.textContent = (parseInt(dex_bonus.textContent) + parseInt(dex.textContent))
}

/// Clears all the ability score, so that the pervious scores are not still taken into effect
function clearAbilityScoreBonuses() {
    document.getElementById("CON_bonus").textContent = 0;
    document.getElementById("CHA_bonus").textContent = 0;
    document.getElementById("DEX_bonus").textContent = 0;
    document.getElementById("STR_bonus").textContent = 0;
    document.getElementById("INT_bonus").textContent = 0;
    document.getElementById("WIS_bonus").textContent = 0;
}

/// Used to clear the list from pervious selection
function clearAllFromList(ul) {
    while (ul.firstChild) ul.removeChild(ul.firstChild);
}

/// Instead of having a long listed created in HTML, this generates the list in 
/// JavaScript of the Spells options, depending on the class selected
async function createListOfEquimentOptions(data, list, list_2, list_3, list_4) {
    console.log("Equiment");
    console.log(data);
    var array_equiment = getArrayOfIndexs(data);
    let array_armor = new Array;
    let array_weapon = new Array;
    let All_weapon_indexs = new Array
    let array_shield = new Array;
    let array_kit = new Array;
    for (var i = 0; i < array_equiment.length; i++) {
        if (array_equiment[i].includes("armor")) {
            array_armor.push(array_equiment[i]);
        } else if (array_equiment[i].includes("shields")) {
            array_shield.push(array_equiment[i]);
        } else if (array_equiment[i].includes("kit")) {
            array_kit.push(array_equiment[i]);
        } else {
            array_weapon.push(array_equiment[i]);
        }
    }

    console.log("array_weapon");
    console.log(array_weapon);

    for (var i = 0; i < array_weapon.length; i++) {
        if (array_weapon[i].includes("-weapons")) {
            console.log("Array index: " + array_weapon[i]);
            let data = await equimentCategoryAsk(array_weapon[i]);
            console.log("All_weapon_indexs");
            All_weapon_indexs.push(data);
            array_weapon.splice(i, 1);
            i--;
        } else if (array_weapon[i].includes("saving-throw")) {
            array_weapon.splice(i, 1);
            i--;
        }
    }
    console.log("After Removing certian elements from array_weapon");
    for (var i = 0; i < array_weapon.length; i++) {
        let word = array_weapon[i]
        let new_word = word.slice(0, word.length - 1);
        array_weapon[i] = new_word;
    }
    console.log(array_weapon);

    var string_of_indexs = All_weapon_indexs.toString().split(",");
    var idex_names_weapons = new Array;

    for (var i = 0, j = string_of_indexs.length; i < j; i++) {
        idex_names_weapons.push(string_of_indexs[i]);
    }
    console.log("idex_names");
    console.log(idex_names_weapons);
    // // All_weapon_indexs.push(array_weapon);
    // console.log("All_weapon_indexs")
    // console.log(All_weapon_indexs);

    let items = array_weapon.toString().split(",");
    for (var i = 0, j = items.length; i < j; i++) {
        idex_names_weapons.push(items[i]);
    }

    console.log("array_armor");
    console.log(array_armor);
    let armor_names = await creatingListofArrayForEquiment(array_armor);
    console.log("armor names");
    console.log(armor_names);
    let shield_names = await creatingListofArrayForEquiment(array_shield);
    ///let kit_names = await creatingListofArrayForEquiment(array_kit);

    //console.log("array_weapons " + array_weapon)
    getListToHTML(idex_names_weapons, list);
    getListToHTML(armor_names, list_2);
    //getListToHTML(array_armor, list_2);
    getListToHTML(shield_names, list_3);
    getListToHTML(array_kit, list_4);
}

async function creatingListofArrayForEquiment(array) {
    let new_array = new Array;
    for (var i = 0; i < array.length; i++) {
        console.log("Array index: " + array[i]);
        let data = await equimentCategoryAsk(array[i]);
        console.log("creatingListofArrayForEquiment");
        //console.log(array);
        //console.log(data);
        new_array.push(data);
    }

    var items = new_array.toString().split(",");
    var equiment_names = new Array;

    for (var i = 0, j = items.length; i < j; i++) {
        equiment_names.push(items[i]);
    }
    return equiment_names;
}
/// Instead of having a long listed created in HTML, this generates the list in 
/// JavaScript of the Spells options, depending on the class selected
async function createListOfSpellOptions(data, list) {
    var array_spells;
    if (data == "None") {
        array_spells = ["None"];
    } else {
        array_spells = getArrayOfIndexs(data);
    }
    console.log("array_spells " + array_spells)
    getListToHTML(array_spells, list);
}

/// Instead of having a long listed created in HTML, this generates the list in 
/// JavaScript of the skill options
async function createListOfProficiencyOptions(array, list) {
    var items = array.toString().split(",");
    var skill_names = new Array;

    for (var i = 0, j = items.length; i < j; i++) {
        if (items[i].includes("skill-")) {
            skill_names.push(items[i].replace("skill-", ""));
        }
    }
    getListToHTML(skill_names, list);
}

/// Creates the list for the dropdown menue in the HTML
function getListToHTML(array, list) {
    array.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    })
}

/// Function that gets the names within the object Array 
/// within the free API access DND e5 documentation and have it converted to a string
function getNames(link) {
    var empty = "None";
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.name;
        });
        return array.join(',     ');
    } else {
        return empty;
    }
}

/// Function that gets the names within the object Array 
/// within the free API access DND e5 documentation and have it converted to a Array, 
// This function is to help to create the list of options with JS instead within the HTML section
function getArrayOfNames(link) {
    var empty = "None";
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.name;
        });
        return array;//.join(',     ');
    } else {
        return empty;
    }
}

/// Function that gets the index within the object Array 
/// within the free API access DND e5 documentation and have it converted to a Array, 
// This function is to help to create the list of options with JS instead within the HTML section
function getArrayOfIndexs(link) {
    var empty = "None";
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.index;
        });
        return array;//.join(',     ');
    } else {
        return empty;
    }
}


/// Function that gets the name within the object Array called info
/// within the free API access DND e5 documentation and have it converted to a string 
function getInfoNames(link) {
    var empty = "None";
    if (dataValid(link)) {
        var array = link.info.map(function (el) {
            return el.name;
        });
        return array.join(',     ');
    } else {
        return empty;
    }
}


/// Function that gets the chooses within the object Array
/// within the free API access DND e5 documentation and have it converted to a String 
function getNumberChoose(link) {
    var empty = "None";
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.choose;
        });
        return array.join(',     ');
    } else {
        return empty;
    }
}

/// Function that gets the bonus within the object Array called info
/// within the free API access DND e5 documentation and have it converted to a string 
function getNumberBonuses(link) {
    var empty = "None";
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.bonus;
        });
        return array.join(',     ');
    } else {
        return empty;
    }
}

/// Function that gets the bonuses within the object Array 
/// within the free API access DND e5 documentation and have it converted to a Array, 
// This function is to help to create the list of options with JS instead within the HTML section
function getArrayOfNumberBonuses(link) {
    var empty = "None";
    var emptyArray = new Array;
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.bonus;
        });
        return array;//.join(',     ');
    } else {
        emptyArray.push(empty);
        return emptyArray;
    }
}

/// Function that gets the ability_score within the object Array 
/// within the free API access DND e5 documentation and have it converted to a Array, 
// This function is to help to create the list of options with JS instead within the HTML section
function getNameBonuses(link) {
    var empty = "None";
    var emptyArray = new Array;
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.ability_score;
        });
        return array;//.join(',     ');
    } else {
        emptyArray.push(empty);
        return emptyArray;
    }
}

// This generates 1 roll for the 6 sided dice that has possible to roll from numbers 1 - 6
function rollOneDice() {
    min = Math.ceil(1);
    max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// This generates all 3 rolls of a 6-sided dice for 1 ability score
// EX: rolls: 1, 3, 4   Ability score is 8
function rollsForScore() {
    var totalRolls = [];
    for (var i = 0; i <= 2; i++) {
        totalRolls.push(rollOneDice())
    }

    var sum = totalRolls.reduce((a, b) => a + b, 0)
    return (sum);
}

function calcForAbilityScoreModifier(modifier, score, text) {
    switch (score) {
        case 3:
            text.textContent = (modifier - 4);
            console.log(text);
            break;
        case 4:
        case 5:
            text.textContent = (modifier - 3);
            break;
        case 6:
        case 7:
            text.textContent = (modifier - 2);
            console.log(text);
            break;
        case 8:
        case 9:
            text.textContent = (modifier - 1);
            console.log(text);
            break;
        case 10:
        case 11:
            text.textContent = (modifier + 0);
            console.log(text);
            break;
        case 12:
        case 13:
            text.textContent = (modifier + 1);
            console.log(text);
            break;
        case 14:
        case 15:
            text.textContent = (modifier + 2);
            console.log(text);
            break;
        case 16:
        case 17:
            text.textContent = (modifier + 3);
            console.log(text);
            break;
        case 18:
            text.textContent = (modifier + 4);
            console.log(text);
            break;
    }
}

/// This function checks if the link or data provided from the data is 
// undefined or not
function dataValid(data) {
    if (data == undefined) {
        return false;
    } else if (data != undefined) {
        return true;
    }
}
