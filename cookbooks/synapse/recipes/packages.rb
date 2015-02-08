execute 'sudo npm install -g forever@0.14.1' do
    not_if 'which forever'
end

execute 'sudo npm install -g nodemon@1.3.6' do
    not_if 'which nodemon'
end