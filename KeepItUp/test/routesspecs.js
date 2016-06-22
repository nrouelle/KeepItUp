/// <reference path="../Scripts/typings/mocha/mocha.d.ts"/>
/// <reference path="../Scripts/typings/supertest.d.ts" />
/// <reference path="../Scripts/typings/superagent.d.ts" />
var request = require('supertest');
var should = require('should');
describe("Loading express", function () {
    var server;
    beforeEach(function () {
        server = require('../server');
    });
    afterEach(function () {
        server.close();
    });
    it('responds to /', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });
    it('404 everything else', function testPath(done) {
        request(server)
            .get('/foo/bar')
            .expect(404, done);
    });
    it('responds to About', function testSlash(done) {
        request(server)
            .get('/about')
            .expect(200, done);
    });
    it('responds to Contact', function testSlash(done) {
        request(server)
            .get('/contact')
            .expect(200, done);
    });
});
describe("Check tasks routes", function () {
    var server;
    beforeEach(function () {
        server = require('../server');
    });
    afterEach(function () {
        server.close();
    });
    it('return task list when /', function testSlash(done) {
        request(server)
            .get('/tasks')
            .expect(function (res) {
            console.log(res.data);
        })
            .expect(200, done);
    });
});
//# sourceMappingURL=routesspecs.js.map