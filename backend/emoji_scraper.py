#scrape all food and drink emojis then add them to json object foodEmojis.json

from selenium import webdriver
from selenium.webdriver.common.by import By
import json

dr=webdriver.Chrome()
dr.get('https://emojipedia.org/food-drink/')
emoji_list = dr.find_element(By.CLASS_NAME, "emoji-list")
items = emoji_list.find_elements(By.TAG_NAME, "li")
emojis = {}
for item in items:
    emojis[item.text.split(' ')[0]] = item.text.split(' ', 1)[1].strip()

print('emoji dictionary: ', emojis)
    
dr.close()

# Serializing json 
json_object = json.dumps(emojis, indent = 4)
  
# Writing to json file
with open("backend/foodEmojis.json", "w") as outfile:
    outfile.write(json_object)