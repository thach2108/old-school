function test(test_data, eigvector, net)
    global numTrianing;
    global numClass;
    class_Test = 14;
    index_Test = (class_Test-1)*(10-numTrianing)+2;%index of test data
    data_Test = test_data(index_Test,1:end);
    
    index_Test2 = mod(index_Test,(10-numTrianing))+numTrianing;%index of image test
    s = sprintf('databases/orl/s%i/%i.pgm',class_Test,index_Test2);%src of image test
    img = imread(s);
    subplot(1,2,1);
    imshow(img);
    title('image test');
    
    data_Test = data_Test*eigvector;
    test=sim(net,data_Test');
    m=max(test);
    for i=1:numClass
        if(test(i)==m)
            s = sprintf('databases/orl/s%i/%i.pgm',i,1)
            img = imread(s);
            subplot(1,2,2);
            imshow(img);
            title('result');
        end
    end
end