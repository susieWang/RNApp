var path = require( 'path' )
var fs = require( 'fs' ),
    stat = fs.stat;

var copy = function( src, dst ){
    src = path.resolve(src);
    dst = path.resolve(dst);
    // 读取目录中的所有文件/目录
    fs.readdir( src, function( err, paths ){
        
        if( err ){
            throw err;
        }
        paths.forEach(function( pathitem ){
            
            var _src = src + '/' + pathitem,
                _dst = dst + '/' + pathitem,
                readable, writable,_js,_jsStr;

            if(path.extname(pathitem)==".ttf"){
                var filename =path.basename(pathitem,'.ttf')
                _js = path.resolve('../../node_modules/react-native-vector-icons') + '/' + filename + '.js'
                _jsStr="import createIconSet from './lib/create-icon-set';import glyphMap from './glyphmaps/"+filename+".json';export default createIconSet(glyphMap, '"+filename+"', '"+filename+".ttf');"
               
            }
            stat( _src, function( err, st ){
                if( err ){
                    throw err;
                }
                // 判断是否为文件
                if( st.isFile() ){
                    // 创建读取流
                    
                    readable = fs.createReadStream( _src );
                    // 创建写入流
                    writable = fs.createWriteStream( _dst );

                     if(_js){
                        fs.writeFile(_js,_jsStr,function(err){
                            if(err) {
                                console.log(err);
                                return;
                            }
                            console.log('成功写入js文件')
                        })
                     }
                    // 通过管道来传输流
                    readable.pipe( writable );
                }
                // 如果是目录则递归调用自身
                else if( st.isDirectory() ){
                    exists( _src, _dst, copy );
                }
            });
        });
    });
};
// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
var exists = function( src, dst, callback ){
    fs.exists( dst, function( exists ){
        // 已存在
        if( exists ){
            callback( src, dst );
        }
        // 不存在
        else{
            fs.mkdir( dst, function(){
                callback( src, dst );
            });
        }
    });
};
// 复制目录
exists( './ttf', '../../node_modules/react-native-vector-icons/Fonts', copy );
exists( './json', '../../node_modules/react-native-vector-icons/glyphmaps', copy );