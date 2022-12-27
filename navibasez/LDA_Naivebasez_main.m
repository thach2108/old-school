function LDA_Naivebasez_main()
 
    global numClass;
    global I;
    global eigvector;
    global training_data ;
    global training_labels;
    
    disp('Step 1... Get img test');
    
    [test_data] = ORL_process_1(I,1);

    disp('Step 2... identification');
    
    Naive_bayes_release(eigvector, training_data, training_labels,test_data);
    disp('Done!');
end