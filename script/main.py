import os

path = 'input_folder'
dir_list = os.listdir(path)

ans = 'n'
out_folder_path = ''

while(ans == 'n'):
    out_folder_path = input('Enter path name for site\n')
    print('Entered', out_folder_path)
    ans = input('Is this correct? y or n\n')
    ans = ans.lower()

f = open('output.txt', 'w')

string1 = '<div class=\"card\" tabindex=\"1\">\n'
string2 = '\t<div class=\"card-image\">\n'
string4 = '\t</div>\n'
string5 = '<p class=\"card-comment\"> temp comment </p>\n'
string6 = '</div>\n\n'

for file_name in dir_list:
    string3 = '\t\t<img src=\"' + out_folder_path + '/' + file_name + '\">\n'
    outputString = string1 + string2 + string3 + string4 + string5 + string6
    f.write(outputString)

f.close()
# print(string1 + string2 + string3 + string4 + string5 + string6)