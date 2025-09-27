
import { SketchCollector } from '../../sketchCollector';

export class Meetingroom365Collector extends SketchCollector {

    static CONFIG = {
        id: "meetingroom365",
        name: "meetingroom365",
        description: "i18n.collectors.meetingroom365.description",
        version: "0",
        website: "https://manage.meetingroom365.com/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTU2NzIwOTU4NiwiZXhwIjoxNTY3MjEzMTg2L",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/162054.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://manage.meetingroom365.com/?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTU2NzIwOTU4NiwiZXhwIjoxNTY3MjEzMTg2L",
    }

    constructor() {
        super(Meetingroom365Collector.CONFIG);
    }
}
