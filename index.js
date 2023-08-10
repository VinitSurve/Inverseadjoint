function determinant()
        {
            var a,b,c,d,e,f,g,h,i,j;
            a = parseInt(f1.t1.value);
            b = parseInt(f1.t2.value);
            c = parseInt(f1.t3.value);
            d = parseInt(f1.t4.value);
            e = parseInt(f1.t5.value);
            f = parseInt(f1.t6.value);
            g = parseInt(f1.t7.value);
            h = parseInt(f1.t8.value);
            i = parseInt(f1.t9.value);
            j = a*(e*i-f*h)-b*(d*i-f*g)+c*(d*h-e*g);
            f1.t10.value=+j
        }
        
        function minor()
        {
                var a,b,c,d,e,f,g,h,i;
            a = parseInt(f1.t1.value);
            b = parseInt(f1.t2.value);
            c = parseInt(f1.t3.value);
            d = parseInt(f1.t4.value);
            e = parseInt(f1.t5.value);
            f = parseInt(f1.t6.value);
            g = parseInt(f1.t7.value);
            h = parseInt(f1.t8.value);
            i = parseInt(f1.t9.value);
            m11 = e*i-f*h;
            f1.t11.value=+m11;
            m12 = d*i-f*g;
            f1.t12.value=+m12;
            m13= d*h-e*g;
            f1.t13.value=+m13;
            m21=b*i-c*h;
            f1.t14.value=+m21;
            m22=a*i-c*g;
            f1.t15.value=+m22;
            m23 = a*h-b*g;
            f1.t16.value = +m23;
            m31=b*f-e*c;
            f1.t17.value=+m31;
           m32=a*f-d*c;
           f1.t18.value=+m32;
           m33 = a*e-b*d;
           f1.t19.value=+m33
            
        }
        
        
        function cofactor()
        {
             var a,b,c,d,e,f,g,h,i;
            a = parseInt(f1.t1.value);
            b = parseInt(f1.t2.value);
            c = parseInt(f1.t3.value);
            d = parseInt(f1.t4.value);
            e = parseInt(f1.t5.value);
            f = parseInt(f1.t6.value);
            g = parseInt(f1.t7.value);
            h = parseInt(f1.t8.value);
            i = parseInt(f1.t9.value);
            m11 = e*i-f*h;
            f1.t11.value=+m11;
            m12 = d*i-f*g;
            f1.t12.value=+m12;
            m13= d*h-e*g;
            f1.t13.value=+m13;
            m21=b*i-c*h;
            f1.t14.value=+m21;
            m22=a*i-c*g;
            f1.t15.value=+m22;
            m23 = a*h-b*g;
            f1.t16.value = +m23;
            m31=b*f-e*c;
            f1.t17.value=+m31;
           m32=a*f-d*c;
           f1.t18.value=+m32;
           m33 = a*e-b*d;
           f1.t19.value=+m33;
           c11=1*m11;
           f1.t20.value=+c11;
           c12=-1*m12;
           f1.t21.value=+c12;
           c13=1*m13;
           f1.t22.value=+c13;
           c21=-1*m21;
           f1.t23.value=+c21;
           c22=1*m22;
           f1.t24.value=+c22;
           c23=-1*m23;
           f1.t25.value=+c23;
           c31=1*m31;
           f1.t26.value=+c31;
           c32=-1*m32;
           f1.t27.value=+c32;
           c33=1*m33;
           f1.t28.value=+c33;
        

        }
        
        
        
        
        
        
        
        
        function matrix()
        {
            var a,b,c,d,e,f,g,h,i;
            a = parseInt(f1.t1.value);
            b = parseInt(f1.t2.value);
            c = parseInt(f1.t3.value);
            d = parseInt(f1.t4.value);
            e = parseInt(f1.t5.value);
            f = parseInt(f1.t6.value);
            g = parseInt(f1.t7.value);
            h = parseInt(f1.t8.value);
            i = parseInt(f1.t9.value);
            m11 = e*i-f*h;
            f1.t11.value=+m11;
            m12 = d*i-f*g;
            f1.t12.value=+m12;
            m13= d*h-e*g;
            f1.t13.value=+m13;
            m21=b*i-c*h;
            f1.t14.value=+m21;
            m22=a*i-c*g;
            f1.t15.value=+m22;
            m23 = a*h-b*g;
            f1.t16.value = +m23;
            m31=b*f-e*c;
            f1.t17.value=+m31;
           m32=a*f-d*c;
           f1.t18.value=+m32;
           m33 = a*e-b*d;
           f1.t19.value=+m33;
           c11=1*m11;
           f1.t20.value=+c11;
           c12=-1*m12;
           f1.t21.value=+c12;
           c13=1*m13;
           f1.t22.value=+c13;
           c21=-1*m21;
           f1.t23.value=+c21;
           c22=1*m22;
           f1.t24.value=+c22;
           c23=-1*m23;
           f1.t25.value=+c23;
           c31=1*m31;
           f1.t26.value=+c31;
           c32=-1*m32;
           f1.t27.value=+c32;
           c33=1*m33;
           f1.t28.value=+c33;
           j=1*c11;
           f1.t29.value=+j;
           k=1*c12;
           f1.t30.value=+k;
           l=1*c13;
           f1.t31.value=+l;
           m=1*c21;
           f1.t32.value=+m;
           n=1*c22;
           f1.t33.value=+n;
           o=1*c23;
           f1.t34.value=+o;
           p=1*c31;
           f1.t35.value=+p;
           q=1*c32;
           f1.t36.value=+q;
           r=1*c33;
           f1.t37.value=+r

           

        }
        
        
        
        
        
        
        function transpose()
        {
             var a,b,c,d,e,f,g,h,i;
            a = parseInt(f1.t1.value);
            b = parseInt(f1.t2.value);
            c = parseInt(f1.t3.value);
            d = parseInt(f1.t4.value);
            e = parseInt(f1.t5.value);
            f = parseInt(f1.t6.value);
            g = parseInt(f1.t7.value);
            h = parseInt(f1.t8.value);
            i = parseInt(f1.t9.value);
            j = a*(e*i-f*h)-b*(d*i-f*g)+c*(d*h-e*g);
            f1.t10.value=+j
            m11 = e*i-f*h;
            f1.t11.value=+m11;
            m12 = d*i-f*g;
            f1.t12.value=+m12;
            m13= d*h-e*g;
            f1.t13.value=+m13;
            m21=b*i-c*h;
            f1.t14.value=+m21;
            m22=a*i-c*g;
            f1.t15.value=+m22;
            m23 = a*h-b*g;
            f1.t16.value = +m23;
            m31=b*f-e*c;
            f1.t17.value=+m31;
           m32=a*f-d*c;
           f1.t18.value=+m32;
           m33 = a*e-b*d;
           f1.t19.value=+m33;
           c11=1*m11;
           f1.t20.value=+c11;
           c12=-1*m12;
           f1.t21.value=+c12;
           c13=1*m13;
           f1.t22.value=+c13;
           c21=-1*m21;
           f1.t23.value=+c21;
           c22=1*m22;
           f1.t24.value=+c22;
           c23=-1*m23;
           f1.t25.value=+c23;
           c31=1*m31;
           f1.t26.value=+c31;
           c32=-1*m32;
           f1.t27.value=+c32;
           c33=1*m33;
           f1.t28.value=+c33;
           j=1*c11;
           f1.t29.value=+j;
           k=1*c12;
           f1.t30.value=+k;
           l=1*c13;
           f1.t31.value=+l;
           m=1*c21;
           f1.t32.value=+m;
           n=1*c22;
           f1.t33.value=+n;
           o=1*c23;
           f1.t34.value=+o;
           p=1*c31;
           f1.t35.value=+p;
           q=1*c32;
           f1.t36.value=+q;
           r=1*c33;
           f1.t37.value=+r;
           b1=1*j;
           f1.t38.value=+b1;
           b2=m*1;
           f1.t39.value=+b2;
           b3=p*1;
           f1.t40.value=+b3;
           b4=k*1;
           f1.t41.value=+b4;
           b5=n*1;
           f1.t42.value=+b5;
           b6=q*1;
           f1.t43.value=+b6;
           b7=l*1;
           f1.t44.value=+b7;
           b8=o*1;
           f1.t45.value=+b8;
           b9=r*1;
           f1.t46.value=+b9
           
           
        

        }
        
        
        
        
    
        function inverse()
        {
              var a,b,c,d,e,f,g,h,i;
            a = parseInt(f1.t1.value);
            b = parseInt(f1.t2.value);
            c = parseInt(f1.t3.value);
            d = parseInt(f1.t4.value);
            e = parseInt(f1.t5.value);
            f = parseInt(f1.t6.value);
            g = parseInt(f1.t7.value);
            h = parseInt(f1.t8.value);
            i = parseInt(f1.t9.value);
            j = a*(e*i-f*h)-b*(d*i-f*g)+c*(d*h-e*g);
            f1.t10.value=+j
            m11 = e*i-f*h;
            f1.t11.value=+m11;
            m12 = d*i-f*g;
            f1.t12.value=+m12;
            m13= d*h-e*g;
            f1.t13.value=+m13;
            m21=b*i-c*h;
            f1.t14.value=+m21;
            m22=a*i-c*g;
            f1.t15.value=+m22;
            m23 = a*h-b*g;
            f1.t16.value = +m23;
            m31=b*f-e*c;
            f1.t17.value=+m31;
           m32=a*f-d*c;
           f1.t18.value=+m32;
           m33 = a*e-b*d;
           f1.t19.value=+m33;
           c11=1*m11;
           f1.t20.value=+c11;
           c12=-1*m12;
           f1.t21.value=+c12;
           c13=1*m13;
           f1.t22.value=+c13;
           c21=-1*m21;
           f1.t23.value=+c21;
           c22=1*m22;
           f1.t24.value=+c22;
           c23=-1*m23;
           f1.t25.value=+c23;
           c31=1*m31;
           f1.t26.value=+c31;
           c32=-1*m32;
           f1.t27.value=+c32;
           c33=1*m33;
           f1.t28.value=+c33;
           j=1*c11;
           f1.t29.value=+j;
           k=1*c12;
           f1.t30.value=+k;
           l=1*c13;
           f1.t31.value=+l;
           m=1*c21;
           f1.t32.value=+m;
           n=1*c22;
           f1.t33.value=+n;
           o=1*c23;
           f1.t34.value=+o;
           p=1*c31;
           f1.t35.value=+p;
           q=1*c32;
           f1.t36.value=+q;
           r=1*c33;
           f1.t37.value=+r;
           b1=1*j;
           f1.t38.value=+b1;
           b2=m*1;
           f1.t39.value=+b2;
           b3=p*1;
           f1.t40.value=+b3;
           b4=k*1;
           f1.t41.value=+b4;
           b5=n*1;
           f1.t42.value=+b5;
           b6=q*1;
           f1.t43.value=+b6;
           b7=l*1;
           f1.t44.value=+b7;
           b8=o*1;
           f1.t45.value=+b8;
           b9=r*1;
           f1.t46.value=+b9;
           b10=b1*1;
           f1.t47.value=+b10;
           b11=b2*1;
           f1.t48.value=+b11;
           b12=b3*1;
           f1.t49.value=+b12;
           b13=b4*1;
           f1.t50.value=+b13;
           b14=b5*1;
           f1.t51.value=+b14;
           b15=b6*1;
           f1.t52.value=+b15;
           b16=b7*1;
           f1.t53.value=+b16;
           b17=b8*1;
           f1.t54.value=+b17;
           b18=b9*1;
           f1.t55.value=+b18;
           b19=j*1;
           f1.t56.value=+b19

          
           
         
        }
        
        
        
        function multiplication()
        
        {
         var a,b,c,d,e,f,g,h,i;
            a = parseInt(f1.t1.value);
            b = parseInt(f1.t2.value);
            c = parseInt(f1.t3.value);
            d = parseInt(f1.t4.value);
            e = parseInt(f1.t5.value);
            f = parseInt(f1.t6.value);
            g = parseInt(f1.t7.value);
            h = parseInt(f1.t8.value);
            i = parseInt(f1.t9.value);
            j = a*(e*i-f*h)-b*(d*i-f*g)+c*(d*h-e*g);
            
            f1.t10.value=+j
            m11 = e*i-f*h;
            f1.t11.value=+m11;
            m12 = d*i-f*g;
            f1.t12.value=+m12;
            m13= d*h-e*g;
            f1.t13.value=+m13;
            m21=b*i-c*h;
            f1.t14.value=+m21;
            m22=a*i-c*g;
            f1.t15.value=+m22;
            m23 = a*h-b*g;
            f1.t16.value = +m23;
            m31=b*f-e*c;
            f1.t17.value=+m31;
           m32=a*f-d*c;
           f1.t18.value=+m32;
           m33 = a*e-b*d;
           f1.t19.value=+m33;
           c11=1*m11;
           f1.t20.value=+c11;
           c12=-1*m12;
           f1.t21.value=+c12;
           c13=1*m13;
           f1.t22.value=+c13;
           c21=-1*m21;
           f1.t23.value=+c21;
           c22=1*m22;
           f1.t24.value=+c22;
           c23=-1*m23;
           f1.t25.value=+c23;
           c31=1*m31;
           f1.t26.value=+c31;
           c32=-1*m32;
           f1.t27.value=+c32;
           c33=1*m33;
           f1.t28.value=+c33;
           j=1*c11;
           f1.t29.value=+j;
           k=1*c12;
           f1.t30.value=+k;
           l=1*c13;
           f1.t31.value=+l;
           m=1*c21;
           f1.t32.value=+m;
           n=1*c22;
           f1.t33.value=+n;
           o=1*c23;
           f1.t34.value=+o;
           p=1*c31;
           f1.t35.value=+p;
           q=1*c32;
           f1.t36.value=+q;
           r=1*c33;
           f1.t37.value=+r;
           b1=1*j;
           f1.t38.value=+b1;
           b2=m*1;
           f1.t39.value=+b2;
           b3=p*1;
           f1.t40.value=+b3;
           b4=k*1;
           f1.t41.value=+b4;
           b5=n*1;
           f1.t42.value=+b5;
           b6=q*1;
           f1.t43.value=+b6;
           b7=l*1;
           f1.t44.value=+b7;
           b8=o*1;
           f1.t45.value=+b8;
           b9=r*1;
           f1.t46.value=+b9;
           b10=b1*1;
           f1.t47.value=+b10;
           b11=b2*1;
           f1.t48.value=+b11;
           b12=b3*1;
           f1.t49.value=+b12;
           b13=b4*1;
           f1.t50.value=+b13;
           b14=b5*1;
           f1.t51.value=+b14;
           b15=b6*1;
           f1.t52.value=+b15;
           b16=b7*1;
           f1.t53.value=+b16;
           b17=b8*1;
           f1.t54.value=+b17;
           b18=b9*1;
           f1.t55.value=+b18;
           b19=a*(e*i-f*h)-b*(d*i-f*g)+c*(d*h-e*g);
           f1.t56.value=+b19
        
           
           }  
           
           
           
           
            function determinant2()
        {
            var a,b,c,d,e;
            a = parseInt(f1.t59.value);
            b = parseInt(f1.t60.value);
            c = parseInt(f1.t61.value);
            d = parseInt(f1.t62.value);  
            e = a*d-b*c;
            f1.t58.value=+e;
            }
            
            
            
            
            
                function minor2()
        {
            var a,b,c,d,e;
            a = parseInt(f1.t59.value);
            b = parseInt(f1.t60.value);
            c = parseInt(f1.t61.value);
            d = parseInt(f1.t62.value);  
            e = a*d-b*c;
            f1.t58.value=+e;
            m11=d*1;
            f1.t63.value=+m11;
            m12=c*1;
            f1.t64.value=+m12;
            m21=b*1;
            f1.t65.value=+m21;
            m22=a*1;
            f1.t66.value=+m22;
            
            }
            
            
            
            
            
            
            
            function cofactor2()
            
            {
                var a,b,c,d,e;
            a = parseInt(f1.t59.value);
            b = parseInt(f1.t60.value);
            c = parseInt(f1.t61.value);
            d = parseInt(f1.t62.value);  
            e = a*d-b*c;
            f1.t58.value=+e;
            m11=d*1;
            f1.t63.value=+m11;
            m12=c*1;
            f1.t64.value=+m12;
            m21=b*1;
            f1.t65.value=+m21;
            m22=a*1;
            f1.t66.value=+m22;
            a11=1*m11;
            f1.t67.value=+a11;
            a12=-1*m12;
            f1.t68.value=+a12;
            a21=-1*m21;
            f1.t69.value=+a21;
            a22=1*m22;
            f1.t70.value=+a22
            }
            
            
            
            function matrix2()
            
            {
            a = parseInt(f1.t59.value);
            b = parseInt(f1.t60.value);
            c = parseInt(f1.t61.value);
            d = parseInt(f1.t62.value);  
            e = a*d-b*c;
            f1.t58.value=+e;
            m11=d*1;
            f1.t63.value=+m11;
            m12=c*1;
            f1.t64.value=+m12;
            m21=b*1;
            f1.t65.value=+m21;
            m22=a*1;
            f1.t66.value=+m22;
            a11=1*m11;
            f1.t67.value=+a11;
            a12=-1*m12;
            f1.t68.value=+a12;
            a21=-1*m21;
            f1.t69.value=+a21;
            a22=1*m22;
            f1.t70.value=+a22 
            c1=1*a11;
            f1.t71.value=+c1;
            c2=1*a12;
            f1.t72.value=+c2;
            c3=1*a21;
            f1.t73.value=+c3;
            c4=1*a22;
            f1.t74.value=+c4
            
            
            }
            
            
            
            function transpose2()
            
            
            {
                a = parseInt(f1.t59.value);
            b = parseInt(f1.t60.value);
            c = parseInt(f1.t61.value);
            d = parseInt(f1.t62.value);  
            e = a*d-b*c;
            f1.t58.value=+e;
            m11=d*1;
            f1.t63.value=+m11;
            m12=c*1;
            f1.t64.value=+m12;
            m21=b*1;
            f1.t65.value=+m21;
            m22=a*1;
            f1.t66.value=+m22;
            a11=1*m11;
            f1.t67.value=+a11;
            a12=-1*m12;
            f1.t68.value=+a12;
            a21=-1*m21;
            f1.t69.value=+a21;
            a22=1*m22;
            f1.t70.value=+a22 
            c1=1*a11;
            f1.t71.value=+c1;
            c2=1*a12;
            f1.t72.value=+c2;
            c3=1*a21;
            f1.t73.value=+c3;
            c4=1*a22;
            f1.t74.value=+c4;
            c5=1*c1;
            f1.t75.value=+c5;
            c6=1*c3;
            f1.t76.value=+c6;
            c7=1*c2;
            f1.t77.value=+c7;
            c8=1*c4;
            f1.t78.value=+c8
            
            
            }
            
            
            
            
            
            
            
            function inverse2()
            
            
            {
                a = parseInt(f1.t59.value);
            b = parseInt(f1.t60.value);
            c = parseInt(f1.t61.value);
            d = parseInt(f1.t62.value);  
            e = a*d-b*c;
            f1.t58.value=+e;
            m11=d*1;
            f1.t63.value=+m11;
            m12=c*1;
            f1.t64.value=+m12;
            m21=b*1;
            f1.t65.value=+m21;
            m22=a*1;
            f1.t66.value=+m22;
            a11=1*m11;
            f1.t67.value=+a11;
            a12=-1*m12;
            f1.t68.value=+a12;
            a21=-1*m21;
            f1.t69.value=+a21;
            a22=1*m22;
            f1.t70.value=+a22 
            c1=1*a11;
            f1.t71.value=+c1;
            c2=1*a12;
            f1.t72.value=+c2;
            c3=1*a21;
            f1.t73.value=+c3;
            c4=1*a22;
            f1.t74.value=+c4;
            c5=1*c1;
            f1.t75.value=+c5;
            c6=1*c3;
            f1.t76.value=+c6;
            c7=1*c2;
            f1.t77.value=+c7;
            c8=1*c4;
            f1.t78.value=+c8
            c9=1*c5;
            f1.t79.value=+c9;
            c10=1*c6;
            f1.t80.value=+c10;
            c12=1*c7;
            f1.t81.value=+c12;
            c13=1*c8;
            f1.t82.value=+c13;
            c14=a*d-b*c;
            f1.t83.value=+c14

            
            }
            
            
