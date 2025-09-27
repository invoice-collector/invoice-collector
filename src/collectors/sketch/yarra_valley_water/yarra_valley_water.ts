
import { SketchCollector } from '../../sketchCollector';

export class YarraValleyWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "yarra_valley_water",
        name: "Yarra Valley Water",
        description: "i18n.collectors.yarra_valley_water.description",
        version: "0",
        website: "http://www.yvw.com.au",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8513.jpg",
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
        entryUrl: "http://www.yvw.com.au",
    }

    constructor() {
        super(YarraValleyWaterCollector.CONFIG);
    }
}
