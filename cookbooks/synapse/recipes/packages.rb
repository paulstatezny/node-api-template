execute 'sudo npm install -g forever@0.14.1' do
    not_if 'which forever'
end