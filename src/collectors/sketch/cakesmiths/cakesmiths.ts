
import { SketchCollector } from '../../sketchCollector';

export class CakesmithsCollector extends SketchCollector {

    static CONFIG = {
        id: "cakesmiths",
        name: "Cakesmiths",
        description: "i18n.collectors.cakesmiths.description",
        version: "0",
        website: "https://www.cakesmiths.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/41853.jpg",
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
        entryUrl: "https://www.cakesmiths.com/login",
    }

    constructor() {
        super(CakesmithsCollector.CONFIG);
    }
}
