function LDA_Feed_main()
    clc;
    file_name='Results/ORL_LDA_EUC_5_57.xlsx';
    metric='euc';
    global numTrianing ;
    numTrianing = 6;
    global numClass;
    numClass = 40;
    
    disp('Step 1... Get img data');
    [training_data,training_labels, test_data,test_labels] = ORL_PCA_process_data_m_n(numTrianing, 1);

    disp('Step 2... Calculate the projection matrix');
    options.Fisherface = 1; 
    [eigvector, eigvalue] = LDA(training_data, training_labels, options);
    
    net = FeedForward(eigvector, training_data);
    
    test(test_data, eigvector, net);
    disp('Finish');
%     disp('Step 3... Calculate recognition');
%     [rate]=LDA_recognition(training_data,training_labels,test_data,test_labels,metric,eigvector);
%     results = rate;
%     
%     disp('Finished');
%     xlswrite(file_name,results);
%     
%     disp('Do chinh xac:');
%     results
%     disp('OK!');
end