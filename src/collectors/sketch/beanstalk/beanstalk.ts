
import { SketchCollector } from '../../sketchCollector';

export class BeanstalkCollector extends SketchCollector {

    static CONFIG = {
        id: "beanstalk",
        name: "beanstalk",
        description: "i18n.collectors.beanstalk.description",
        version: "0",
        website: "https://login.beanstalkapp.com/session/new",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8570.jpg",
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
        entryUrl: "https://login.beanstalkapp.com/session/new",
    }

    constructor() {
        super(BeanstalkCollector.CONFIG);
    }
}
