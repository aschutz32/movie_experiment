import os
import pandas as pd

dir = "/Users/wesleymeredith/code/avaratings/static/images/beforeAfter/"
data = {
'old_name':[],
'new_name':[]
}


for i, file in enumerate(os.listdir(dir)):
    print(file, i)
    if 'jpg' in file:
        old = dir + file

        movie_name = file.split('_')[1]
        time = file.split('_')[2].replace('.jpg', '')
        before_str = '6107e9674f4e5369306447f188009'
        after_str = '192u3019u0798dlsfsdk990'
        new  = 'screenshot_' + movie_name + '_'+ before_str + time + after_str+'.jpg'

        new = dir + new
        print(os.path.exists(old), old)
        os.rename(old, new)
        data['old_name'].append(file)
        data['new_name'].append(new)


df = pd.DataFrame(data)
df.to_csv('key_before_after.csv')
