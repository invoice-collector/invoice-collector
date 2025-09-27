
import { SketchCollector } from '../../sketchCollector';

export class StackoverflowCollector extends SketchCollector {

    static CONFIG = {
        id: "stackoverflow",
        name: "stackoverflow",
        description: "i18n.collectors.stackoverflow.description",
        version: "0",
        website: "https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/56521.jpg",
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
        entryUrl: "https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2f",
    }

    constructor() {
        super(StackoverflowCollector.CONFIG);
    }
}
