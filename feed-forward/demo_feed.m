global numTrianing;
global numClass;
[P eigvector] = LDA_Feed_main();
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
%Test data
net=train(net,P,T);



img = imread('databases/orl/s21/9.pgm');
title('Data tesst');
subplot(1,2,1);
imshow(img);
title('test image');
X=double(img);
[height width channels]=size(X);
if(channels == 3)
   X = 0.2989 * X(:,:,1) + 0.5870* X(:,:,2) + 0.1140 * X(:,:,3);
end
Y = [];
Y=[Y;reshape(X,1,height*width)];

dataTest = Y*eigvector;
test=sim(net,dataTest');
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