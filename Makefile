EMCC = em++ -O1 --closure 1 --bind -Iinclude  -s ENVIRONMENT=web -s INITIAL_MEMORY=128mb -s ALLOW_MEMORY_GROWTH=0 -s MALLOC="emmalloc"  -s SUPPORT_LONGJMP=0 -s FORCE_FILESYSTEM=1 -lidbfs.js -g2 -flto -s SINGLE_FILE=1
EMCCC = emcc

all:
	$(EMCC) source/console.cpp examples/console.cpp -o build/public_html/js/console.js
	$(EMCC) source/console.cpp source/dom.cpp examples/dom.cpp -o build/public_html/js/dom.js
	$(EMCC) source/console.cpp source/indexed_db.cpp examples/indexed_db.cpp -o build/public_html/js/indexed_db.js
f1:
	$(EMCCC) f1l3/f1l3a.c -o f1a.js -s ENVIRONMENT=web -s INITIAL_MEMORY=700mb -s ALLOW_MEMORY_GROWTH=0 -O3  -s MALLOC="emmalloc" -s USES_DYNAMIC_ALLOC=0 -s SUPPORT_LONGJMP=0 -s FORCE_FILESYSTEM=1 -lidbfs.js -g0 -flto --closure 1
	$(EMCC) source/console.cpp source/indexed_db.cpp f1l3/f1l3b.c  -o build/public_html/js/f1b.js --post-js f1l3/post-b.js -s EXPORTED_FUNCTIONS='["_main","_fl"]' -s EXPORTED_RUNTIME_METHODS='["ccall","cwrap"]'
	$(EMCC) f1l3/f1l3c.c source/console.cpp source/indexed_db.cpp -o build/public_html/js/f1c.js --post-js f1l3/post-c.js -s EXPORTED_FUNCTIONS='["_main","_fl"]'  -s EXPORTED_RUNTIME_METHODS='["ccall","cwrap"]'
	$(EMCC) f1l3/f1l3d.c source/console.cpp source/indexed_db.cpp -o build/public_html/js/f1d.js --post-js f1l3/post-d.js -s EXPORTED_FUNCTIONS='["_main","_fl"]'  -s EXPORTED_RUNTIME_METHODS='["ccall","cwrap"]'
	$(EMCC) f1l3/f1l3e.c source/console.cpp source/indexed_db.cpp -o build/public_html/js/f1e.js --post-js f1l3/post-e.js -s EXPORTED_FUNCTIONS='["_main","_fl"]'  -s EXPORTED_RUNTIME_METHODS='["ccall","cwrap"]'
	$(EMCCC) f1l3/f1l3f.c -o f1f.js -s ENVIRONMENT=web -s INITIAL_MEMORY=128mb -s ALLOW_MEMORY_GROWTH=0 -O3  -s MALLOC="emmalloc" -s USES_DYNAMIC_ALLOC=0 -s SUPPORT_LONGJMP=0 -s FORCE_FILESYSTEM=1 -s SINGLE_FILE=1 -lidbfs.js -g0 -flto --closure 1