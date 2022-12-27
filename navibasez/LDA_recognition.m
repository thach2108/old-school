function LDA_recognition(test_image_set,test_labels)
    global exact_class;
    global eigvector;
    global training_data ;
    global training_labels;
    metric='euc';
    Tr=training_data*eigvector;
    Ts=test_image_set*eigvector;
    correct_count=0;
    for i=1:length(test_labels)
        test_image=Ts(i,:);
        distance_vector=[];
        for j=1:length(training_labels)
            training_image=Tr(j,:);
            if strcmpi(metric,'euc')%Euclidean distance
                temp =  norm(training_image - test_image );
            end
            if strcmpi(metric,'man')%Manhattan distance
                temp =  norm( training_image - test_image,1);
            end
            distance_vector=[distance_vector, temp];
        end
        [min_value,min_index]=min(distance_vector);
        if(training_labels(min_index)==test_labels(i))
            correct_count=correct_count+1;
        end
    end 
    rate=(correct_count/length(test_labels))*100;
    sprintf('Do chinh xac cua LDA la: %f',rate)
    
    Ts=test_image_set;
    correct_count=0;
    for i=1:length(test_labels)
        test_image=Ts(i,:);
        Naive_bayes_release(eigvector, training_data, training_labels,test_image);
        if(exact_class==test_labels(i))
            correct_count=correct_count+1;
        end
    end 
    rate=(correct_count/length(test_labels))*100;
    sprintf('Do chinh xac khi ket hop LDA va Naive Bayes la: %f',rate)
end