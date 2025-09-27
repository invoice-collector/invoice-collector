
import { SketchCollector } from '../../sketchCollector';

export class DiArezzoCollector extends SketchCollector {

    static CONFIG = {
        id: "di_arezzo",
        name: "Di-arezzo",
        description: "i18n.collectors.di_arezzo.description",
        version: "0",
        website: "https://www.di-arezzo.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118369.jpg",
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
        entryUrl: "https://www.di-arezzo.fr/",
    }

    constructor() {
        super(DiArezzoCollector.CONFIG);
    }
}
