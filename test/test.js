/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isUint32Array = require( '@stdlib/assert-is-uint32array' );
var gamma = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gamma, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to generate pseudorandom number generators', function test( t ) {
	t.equal( typeof gamma.factory, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is a method to serialize a pseudorandom number generator as JSON', function test( t ) {
	t.equal( typeof gamma.toJSON, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is the generator name', function test( t ) {
	t.equal( gamma.NAME, 'gamma', 'has property' );
	t.end();
});

tape( 'attached to the main export is the underlying PRNG', function test( t ) {
	t.equal( typeof gamma.PRNG, 'function', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator seed', function test( t ) {
	t.equal( isUint32Array( gamma.seed ), true, 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator seed length', function test( t ) {
	t.equal( typeof gamma.seedLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state', function test( t ) {
	t.equal( isUint32Array( gamma.state ), true, 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state length', function test( t ) {
	t.equal( typeof gamma.stateLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state size', function test( t ) {
	t.equal( typeof gamma.byteLength, 'number', 'has property' );
	t.end();
});

tape( 'the function returns pseudorandom numbers (when `alpha >= 1`)', function test( t ) {
	var r;
	var i;
	for ( i = 0; i < 1e2; i++ ) {
		r = gamma( 2.0, 1.0 );
		t.strictEqual( typeof r, 'number', 'returns a number' );
		t.strictEqual( r > 0.0, true, 'returns a positive number' );
	}
	t.end();
});

tape( 'the function returns pseudorandom numbers (when `alpha < 1`)', function test( t ) {
	var r;
	var i;
	for ( i = 0; i < 1e2; i++ ) {
		r = gamma( 0.05, 1.0 );
		t.strictEqual( typeof r, 'number', 'returns a number' );
		t.strictEqual( r > 0.0, true, 'returns a positive number' );
	}
	t.end();
});

tape( 'the function supports setting the generator state (alpha >= 1.0)', function test( t ) {
	var state;
	var arr;
	var i;

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		gamma( 2.0, 2.0 );
	}
	// Capture the current state:
	state = gamma.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( gamma( 2.0, 2.0 ) );
	}
	// Set the state:
	gamma.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( gamma( 2.0, 2.0 ), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the function supports setting the generator state (alpha < 1.0)', function test( t ) {
	var state;
	var arr;
	var i;

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		gamma( 0.05, 2.0 );
	}
	// Capture the current state:
	state = gamma.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( gamma( 0.05, 2.0 ) );
	}
	// Set the state:
	gamma.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( gamma( 0.05, 2.0 ), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});
