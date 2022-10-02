import { Component, OnInit } from '@angular/core';
import { mockWords } from '../mock-words';
import { Word } from '../model/word';



@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

words = mockWords;

selectedWord?: Word;

onSelect(word: Word): void {
  this.selectedWord = word;
  console.log(this.selectedWord.wordDefention)
}

  constructor() { }

  ngOnInit(): void {
    console.log(this.words)
  }

}
