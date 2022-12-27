function [rate]=LDA_recognition(training_image_set,training_labels,test_image_set,test_labels,metric,eigvector)
%     Tr=[];
%     Ts=[];
%     for i=1:length(training_labels)
%         X=training_image_set(i,:);
%         X=project(W,X,mu);
%         Tr=[Tr;X];
%     end
%     for i=1:length(test_labels)
%         X=test_image_set(i,:);
%         X=project(W,X,mu);
%         Ts=[Ts;X];
%     end
    Tr=training_image_set*eigvector;
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
end