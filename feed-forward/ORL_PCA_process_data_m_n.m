%% function:
%   Ham xu ly du lieu cua CSDL ORL cho thuat toan PCA. m anh huan luyen va 10-m anh kiem tra 
%notes:
%   m anh dau tien duoc dung de huan luyen va phan con lai de kiem tra
%% inputs:
%   no_of_training_images: So luong anh huan luyen
%   option: neu la 0 thi moi cot la du lieu cua 1 anh, neu la 1 thi moi
%   hang la du lieu cua 1 anh.
%% outputs:
%   training_data: ma tran du lieu anh ORL, moi hang la 1 anh (option=1)
%   hoac moi cot la du lieu 1 anh (option=0).
%   training_labels: vector nhan so nguyen cua anh training. Cau truc {1 1
%   1 2 2 2 3 3 3...].
%% status:
%

function [training_data,training_labels,test_data,test_labels]=ORL_PCA_process_data_m_n(no_of_training_images,option)
    training_data=[];
    training_labels=[];
    test_data=[];
    test_labels=[];
    global numTrianing ;
    global numClass;
    for i=1:numClass % number class
        for j=1:10
            s = sprintf('databases/orl/s%i/%i.pgm',i,j);
            X=double(imread(s));
            [height width channels]=size(X);
            if(channels == 3)
                X = 0.2989 * X(:,:,1) + 0.5870* X(:,:,2) + 0.1140 * X(:,:,3);
            end
           if j<=no_of_training_images
               if option==0
                %% Add image as a column vector:
                training_data=[training_data,reshape(X,height*width,1)];
                
                else %option==1
                %% Add image as a row vector:
                training_data=[training_data;reshape(X,1,height*width)];
                end
            
            training_labels=[training_labels, i];
           else
               if option==0
                %% Add image as a column vector:
                test_data=[test_data,reshape(X,height*width,1)];
                
            else %option==1
                %% Add image as a row vector:
                test_data=[test_data;reshape(X,1,height*width)];
            end
                   
            test_labels=[test_labels, i]; 
           end
        end%end for j
    end%end for i
end