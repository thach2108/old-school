function Naive_bayes_release(eigvector,img_training, label_training, data_test)

    global numClass;
    global numTrianing ;
    
    % B1 giam chieu data
    img_training = (img_training*eigvector);
    
    % m : so anh training
    % n : so dac trung
    [m,n] = size(img_training);
    
    %% tinh mean va phuong sai cua moi class
    Mean_class = zeros(numClass,n);
    for i = 1:numClass
        index = (i-1)*numTrianing + 1;
        to = index + numTrianing -1;
        Mean = mean(img_training(index:to, : ));
        Mean_class(i,:) = Mean(1, :);
    end
    
    Variance_class = zeros(numClass,n);
    for i = 1:numClass
        index = (i-1)*numTrianing + 1;
        to = index + numTrianing -1;
        Vari = std(img_training(index:to, : ));
        Variance_class(i,:) = Vari(1, :);
    end
    %% test 
    %Tinh xac suat 
    P_class = zeros(numClass,n);
    img_test = (data_test*eigvector);
    for i=1:numClass
        for j=1: n
            aa = ((img_test(j) - Mean_class(i,j)).^2)  /   ( 2 * Variance_class(i,j).^2 );
            ee = exp(-nthroot(aa, 5.8));
            P_class(i,j) = ee ./ (sqrt( 2 * pi)* Variance_class(i,j));         
        end
    end
    % tinh toan bo xac suat

    P_class(P_class==0) = 3;
    mi = min(min(P_class));            
    P_class(P_class==3) = mi;
    P_class = nthroot(P_class, 2);
    P_main = ones(numClass, 1);
    for i=1:numClass
        for j=1: n
            P_main(i) = P_main(i) *  P_class(i,j);      
        end
    end
    % test
    global exact_class;
    exact_class = find(P_main==max(P_main)); %% ten lop nhan dang
    exact_class = exact_class(1);
    
end