EMCC = em++ -O3 --closure 1 --bind -Iinclude -sENVIRONMENT=web -sINITIAL_MEMORY=128mb -s ALLOW_MEMORY_GROWTH=0 -sMALLOC="emmalloc" -sSUPPORT_LONGJMP=0 -sFORCE_FILESYSTEM=1 -lidbfs.js -g2 -flto=thin -sSINGLE_FILE=1
EMCCC = emcc

f1l3
all:
	$(EMCCC) f1l3/f1l3a.c -o build/public_html/js/fa.js -sENVIRONMENT=web -sINITIAL_MEMORY=128mb -sALLOW_MEMORY_GROWTH=0 -O3 -sMALLOC="emmalloc" -sUSES_DYNAMIC_ALLOC=0 -sSUPPORT_LONGJMP=0 -sFORCE_FILESYSTEM=1 -lidbfs.js -flto=thin 
	$(EMCC) f1l3/f1l3b.c source/console.cpp source/indexed_db.cpp -o build/public_html/js/fb.js 
	$(EMCC) f1l3/f1l3c.c source/console.cpp source/indexed_db.cpp -o build/public_html/js/fc.js 
	$(EMCC) f1l3/f1l3d.c source/console.cpp source/indexed_db.cpp -o build/public_html/js/fd.js 
	$(EMCC) f1l3/f1l3e.c source/console.cpp source/indexed_db.cpp -o build/public_html/js/fe.js 
	$(EMCCC) f1l3/f1l3f.c -o build/public_html/js/ff.js -sENVIRONMENT=web -sINITIAL_MEMORY=128mb -sALLOW_MEMORY_GROWTH=0 -O3 -sMALLOC="emmalloc" -sUSES_DYNAMIC_ALLOC=0 -sSUPPORT_LONGJMP=0 -sFORCE_FILESYSTEM=1 -sSINGLE_FILE=1 -lidbfs.js -g2 -flto=thin --closure 1
 
