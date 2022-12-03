EMCC = em++ --bind -Iinclude -std=c++20 -sINITIAL_MEMORY=256mb \
-s ALLOW_MEMORY_GROWTH=0 -sFORCE_FILESYSTEM=1 -lidbfs.js \
-sSINGLE_FILE=1 -sEXPORTED_FUNCTIONS='["_main","_f1"]' -sEXPORTED_RUNTIME_METHODS=ccall,cwrap 
EMCCC = em++

all:
	$(EMCCC) f1l3/f1l3a.c -o build/public_html/js/fa.js \
	-sINITIAL_MEMORY=256mb -std=c++20 -sALLOW_MEMORY_GROWTH=0 \
	-sFORCE_FILESYSTEM=1 -lidbfs.js -sSINGLE_FILE=1
	
	$(EMCC) f1l3/f1l3b.c source/console.cpp source/indexed_db.cpp -o build/public_html/js/fb.js
	$(EMCC) f1l3/f1l3c.c source/console.cpp source/indexed_db.cpp -o build/public_html/js/fc.js
	$(EMCC) f1l3/f1l3d.c source/console.cpp source/indexed_db.cpp -o build/public_html/js/fd.js
	$(EMCC) f1l3/f1l3e.c source/console.cpp source/indexed_db.cpp -o build/public_html/js/fe.js
	
	$(EMCCC) f1l3/f1l3f.c -o build/public_html/js/ff.js \
	-sEXPORTED_FUNCTIONS='["_main","_str","_read","_pl"]' -sEXPORTED_RUNTIME_METHODS=ccall,cwrap \
	--post-js f1l3/filesys.js -std=c++20 --extern-post-js f1l3/ccall.js \
	--post-js f1l3/fs-glsl.js -sINITIAL_MEMORY=256mb \
	-sALLOW_MEMORY_GROWTH=0  \
	-sFORCE_FILESYSTEM=1 -sFULL_ES3=1 -sSINGLE_FILE=0 -sMAX_WEBGL_VERSION=2 \
	-sMIN_WEBGL_VERSION=2 -lidbfs.js -sUSE_SDL=2
