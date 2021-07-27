EMCC = em++ -O3 --closure 1 --bind -Iinclude  -s ENVIRONMENT=web -s INITIAL_MEMORY=128mb -s ALLOW_MEMORY_GROWTH=0 -s MALLOC="emmalloc"  -s SUPPORT_LONGJMP=0 -s FORCE_FILESYSTEM=1 -lidbfs.js -g2 -flto -s SINGLE_FILE=1
EMCCC = emcc


all:
	$(EMCCC) f1l3/f1l3a.c -o build/public_html/js/fa.js -s ENVIRONMENT=web -s INITIAL_MEMORY=128mb -s ALLOW_MEMORY_GROWTH=0 -O3  -s MALLOC="emmalloc" -s USES_DYNAMIC_ALLOC=0 -s SUPPORT_LONGJMP=0 -s FORCE_FILESYSTEM=1 -lidbfs.js -flto 
	$(EMCC) source/console.cpp source/indexed_db.cpp f1l3/f1l3b.c -sEXPORTED_FUNCTIONS="["_main","_php"]" -sEXPORTED_RUNTIME_METHODS="["ccall"]" -o build/public_html/js/fb.js 
	$(EMCC) f1l3/f1l3c.c source/console.cpp source/indexed_db.cpp -o build/public_html/js/fc.js 
	$(EMCC) f1l3/f1l3d.c source/console.cpp source/indexed_db.cpp -o build/public_html/js/fd.js 
	$(EMCC) f1l3/f1l3e.c source/console.cpp source/indexed_db.cpp -o build/public_html/js/fe.js 
	$(EMCCC) f1l3/f1l3f.c -o build/public_html/js/ff.js -s ENVIRONMENT=web -s INITIAL_MEMORY=128mb -s ALLOW_MEMORY_GROWTH=0 -O3  -s MALLOC="emmalloc" -s USES_DYNAMIC_ALLOC=0 -s SUPPORT_LONGJMP=0 -s FORCE_FILESYSTEM=1 -s SINGLE_FILE=1 -lidbfs.js -g2 -flto --closure 1
