function [ net ] = FeedFordward( eigvector , training_data )
    global numTrianing;
    global numClass;
    P = training_data*eigvector;%End LDA
    P = P';
    [m n] = size(P);
    net=newff(minmax(P),[20 numClass],{'logsig','logsig'},'trainlm');
    net.trainParam.epochs=100;
    T = zeros(m+1, n);

    for i = 1:m+1
        k = (i-1)*numTrianing+1;
        for j = k:(i*numTrianing)
            T(i,j) = 1;
        end
    end
    net=train(net,P,T);
end

