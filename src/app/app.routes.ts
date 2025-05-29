
import { Routes } from '@angular/router';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { EmailNotificationComponentComponent } from './components/email-notification-component/email-notification-component.component';
import { NewZeroTrafficComponent } from './components/new-zero-traffic/new-zero-traffic.component';
import { PercentagedecreaseComponent } from './components/percentagedecrease/percentagedecrease.component';
import { PercentageincreaseComponent } from './components/percentageincrease/percentageincrease.component';
import { StatuscodeAnalyzerComponent } from './components/statuscode-analyzer/statuscode-analyzer.component';
import { ZeroTrafficComponent } from './components/zero-traffic/zero-traffic.component';


export const routes: Routes = [
    { path: 'zero-traffic', component: ZeroTrafficComponent },
    { path: 'new-zero-traffic', component: NewZeroTrafficComponent },
    { path: 'statuscode-analyzer', component: StatuscodeAnalyzerComponent },
    { path: 'percent-increase', component: PercentageincreaseComponent },
    { path: 'percent-decrease', component: PercentagedecreaseComponent },
    { path: 'chatbot', component: ChatbotComponent },
    { path: 'email-notification', component: EmailNotificationComponentComponent },
    { path: '', redirectTo: 'zero-traffic', pathMatch: 'full' }
  ];