
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EwvEnergieUndWasserversorgungCollector extends SketchCollector {

    static CONFIG = {
        id: "ewv_energie_und_wasserversorgung",
        name: "EWV Energie- und Wasserversorgung",
        description: "i18n.collectors.ewv_energie_und_wasserversorgung.description",
        version: "0",
        website: "https://kundenportal.ewv.de/ewvGips/Gips?SessionMandant=EWV&Anwendung=CMSWEBPAGE&Methode=ShowHTMLAusgabe&RessourceID=4645&Startlink=&utm_source=Webseite+Startseite+Icons+Header&utm_medium=Textlink&utm_campaign=Startseite-Header-Kundenportal-Icon&_ga=2.136",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1188450.jpg",
        type: CollectorType.SKETCH,
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
        loginUrl: "https://kundenportal.ewv.de/ewvGips/Gips?SessionMandant=EWV&Anwendung=CMSWEBPAGE&Methode=ShowHTMLAusgabe&RessourceID=4645&Startlink=&utm_source=Webseite+Startseite+Icons+Header&utm_medium=Textlink&utm_campaign=Startseite-Header-Kundenportal-Icon&_ga=2.136",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EwvEnergieUndWasserversorgungCollector.CONFIG);
    }
}
