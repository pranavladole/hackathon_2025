import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';
import { timeout, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css',
})
export class ChatbotComponent {
  userMessage = '';
  messages: { user: string; bot: string }[] = [];
  botMessage: string = '';
  constructor(private apiService: ApiService) {}
  isLoading = false;
  send() {
    this.isLoading = true;
    this.apiService.sendMessage(this.userMessage).subscribe((res) => {
     console.log("response of backend"+ res);
      this.isLoading = false;
      this.messages.push({ user: this.userMessage, bot: res });
      this.userMessage = '';    
    });
  }
}
