package com.curso.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curso.model.Curso;
import com.curso.repository.CursoRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/cursos")
@AllArgsConstructor
public class CursoController {

	private CursoRepository cursoRepository;
	
	@GetMapping
	public List<Curso> list() {
		return cursoRepository.findAll();
	}
}
