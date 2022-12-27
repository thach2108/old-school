function [test_data]=ORL_process_1(img, option)
    X=double(img);
    test_data=[];
    [height width channels]=size(X);
    
    if(channels == 3)
        X = 0.2989 * X(:,:,1) + 0.5870* X(:,:,2) + 0.1140 * X(:,:,3);I
    end
    
    if option==0
    %% Add image as a column vector:
    test_data=[test_data,reshape(X,height*width,1)];

    else %option==1
    %% Add image as a row vector:
    test_data=[test_data;reshape(X,1,height*width)];
    end

end